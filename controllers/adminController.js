const Result = require('../models/Result');
const User = require('../models/User');

// @GET /api/admin/results
exports.getAllResults = async (req, res) => {
  try {
    const results = await Result.find().sort({ score: -1 });
    // Add ranks
    const rankedResults = results.map((r, index) => ({
      ...r.toObject(),
      rank: index + 1
    }));
    res.json({ success: true, results: rankedResults, total: results.length });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch results' });
  }
};

// @GET /api/admin/shortlist
exports.getShortlist = async (req, res) => {
  try {
    const PASS_MARK = 65;
    const results = await Result.find({ score: { $gte: PASS_MARK }, examStatus: { $ne: 'terminated' } }).sort({ score: -1 });
    const shortlisted = results.map((r, index) => ({
      rank: index + 1,
      studentName: r.studentName,
      rollNumber: r.rollNumber,
      score: r.score,
      passed: r.passed,
      examStatus: r.examStatus
    }));
    res.json({ success: true, shortlisted, total: shortlisted.length });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch shortlist' });
  }
};

// @GET /api/admin/stats
exports.getStats = async (req, res) => {
  try {
    const totalStudents = await User.countDocuments({ role: 'student' });
    const completedExams = await Result.countDocuments();
    const passed = await Result.countDocuments({ passed: true });
    const terminated = await Result.countDocuments({ examStatus: 'terminated' });
    const avgScore = await Result.aggregate([{ $group: { _id: null, avg: { $avg: '$score' } } }]);
    res.json({
      success: true,
      stats: {
        totalStudents,
        completedExams,
        passed,
        failed: completedExams - passed,
        terminated,
        avgScore: avgScore.length ? Math.round(avgScore[0].avg * 10) / 10 : 0
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch stats' });
  }
};
