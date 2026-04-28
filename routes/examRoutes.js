const express = require('express');
const router = express.Router();
const { startExam, submitExam, reportCheatEvent, getMyResult } = require('../controllers/examController');
const { protect } = require('../middleware/auth');

router.get('/start', protect, startExam);
router.post('/submit', protect, submitExam);
router.post('/anti-cheat/report', protect, reportCheatEvent);
router.get('/result', protect, getMyResult);

module.exports = router;
