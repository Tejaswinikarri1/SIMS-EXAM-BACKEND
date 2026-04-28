const User = require('../models/User');
const Result = require('../models/Result');
const questions = require('../data/questions');

const EXAM_DURATION = 40 * 60; // 40 minutes in seconds
const PASS_MARK = 65;
const MAX_TAB_SWITCHES = 3;

// Fisher-Yates shuffle
const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// @GET /api/exam/start
exports.startExam = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (user.examStatus === 'completed' || user.examStatus === 'terminated') {
      return res.status(403).json({ success: false, message: 'You have already completed or been terminated from this exam.' });
    }
    let questionOrder = user.questionOrder;
    if (!questionOrder || questionOrder.length === 0) {
      questionOrder = shuffleArray(questions.map(q => q.id));
      user.questionOrder = questionOrder;
    }
    if (user.examStatus === 'not_started') {
      user.examStatus = 'in_progress';
      user.examStartTime = new Date();
    }
    await user.save();

    // Check if time has expired
    const elapsed = Math.floor((Date.now() - new Date(user.examStartTime).getTime()) / 1000);
    const remainingTime = EXAM_DURATION - elapsed;
    if (remainingTime <= 0) {
      user.examStatus = 'completed';
      await user.save();
      return res.status(403).json({ success: false, message: 'Exam time has expired.' });
    }

    // Return shuffled questions WITHOUT correct answers
    const shuffledQuestions = questionOrder.map(id => {
      const q = questions.find(q => q.id === id);
      return { id: q.id, topic: q.topic, question: q.question, options: q.options };
    });

    res.json({
      success: true,
      questions: shuffledQuestions,
      examStartTime: user.examStartTime,
      remainingTime,
      examDuration: EXAM_DURATION
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to start exam', error: error.message });
  }
};

// @POST /api/exam/submit
exports.submitExam = async (req, res) => {
  try {
    const { answers, tabSwitchCount, cheatingWarnings, submissionType } = req.body;
    const user = await User.findById(req.user._id);

    if (user.examStatus === 'completed' || user.examStatus === 'terminated') {
      return res.status(403).json({ success: false, message: 'Exam already submitted.' });
    }

    // Evaluate answers
    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;
    const evaluatedAnswers = [];

    questions.forEach(q => {
      const studentAnswer = answers ? answers.find(a => a.questionId === q.id) : null;
      const selectedOption = studentAnswer ? studentAnswer.selectedOption : null;
      let isCorrect = false;

      if (selectedOption === null || selectedOption === undefined) {
        skippedCount++;
      } else if (selectedOption === q.correct) {
        correctCount++;
        isCorrect = true;
      } else {
        wrongCount++;
      }
      evaluatedAnswers.push({ questionId: q.id, selectedOption, isCorrect });
    });

    const score = correctCount;
    const passed = score >= PASS_MARK;
    const endTime = new Date();
    const startTime = new Date(user.examStartTime);
    const timeTaken = Math.floor((endTime - startTime) / 1000);

    // Determine exam status
    let finalStatus = 'completed';
    if (submissionType === 'terminated') finalStatus = 'terminated';
    else if (submissionType === 'time_expired') finalStatus = 'time_expired';

    // Save result
    const result = await Result.create({
      student: user._id,
      rollNumber: user.rollNumber,
      studentName: user.name,
      answers: evaluatedAnswers,
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      wrongAnswers: wrongCount,
      skippedAnswers: skippedCount,
      score,
      passed,
      examStatus: finalStatus,
      tabSwitchCount: tabSwitchCount || 0,
      cheatingWarnings: cheatingWarnings || 0,
      startTime,
      endTime,
      timeTaken
    });

    user.examStatus = finalStatus === 'terminated' ? 'terminated' : 'completed';
    user.examEndTime = endTime;
    await user.save();

    res.json({
      success: true,
      message: 'Exam submitted successfully',
      result: {
        score,
        totalQuestions: questions.length,
        correctAnswers: correctCount,
        wrongAnswers: wrongCount,
        skippedAnswers: skippedCount,
        passed,
        passMark: PASS_MARK,
        examStatus: finalStatus,
        timeTaken
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Submission failed', error: error.message });
  }
};

// @POST /api/exam/anti-cheat/report
exports.reportCheatEvent = async (req, res) => {
  try {
    const { eventType, count } = req.body;
    const user = await User.findById(req.user._id);
    user.cheatingWarnings = (user.cheatingWarnings || 0) + 1;
    await user.save();

    // Terminate if exceeded
    if (user.cheatingWarnings >= MAX_TAB_SWITCHES && eventType === 'tab_switch') {
      return res.json({ success: true, action: 'terminate', message: 'Maximum violations exceeded. Exam terminated.' });
    }
    res.json({ success: true, action: 'warn', warnings: user.cheatingWarnings, maxWarnings: MAX_TAB_SWITCHES });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to report event' });
  }
};

// @GET /api/exam/result
exports.getMyResult = async (req, res) => {
  try {
    const result = await Result.findOne({ student: req.user._id }).sort({ createdAt: -1 });
    if (!result) return res.status(404).json({ success: false, message: 'No result found' });
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch result' });
  }
};
