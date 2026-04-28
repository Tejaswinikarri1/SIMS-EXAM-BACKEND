const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  questionId: { type: Number, required: true },
  selectedOption: { type: Number, default: null },
  isCorrect: { type: Boolean, default: false }
}, { _id: false });

const resultSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rollNumber: { type: String, required: true },
  studentName: { type: String, required: true },
  answers: [answerSchema],
  totalQuestions: { type: Number, default: 100 },
  correctAnswers: { type: Number, default: 0 },
  wrongAnswers: { type: Number, default: 0 },
  skippedAnswers: { type: Number, default: 0 },
  score: { type: Number, default: 0 },
  passed: { type: Boolean, default: false },
  rank: { type: Number },
  examStatus: { type: String, enum: ['completed', 'terminated', 'time_expired'], default: 'completed' },
  tabSwitchCount: { type: Number, default: 0 },
  cheatingWarnings: { type: Number, default: 0 },
  startTime: { type: Date },
  endTime: { type: Date },
  timeTaken: { type: Number }, // in seconds
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Result', resultSchema);
