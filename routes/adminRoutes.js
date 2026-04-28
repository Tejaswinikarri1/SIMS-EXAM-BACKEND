const express = require('express');
const router = express.Router();
const { getAllResults, getShortlist, getStats } = require('../controllers/adminController');
const { protect, adminOnly } = require('../middleware/auth');

router.get('/results', protect, adminOnly, getAllResults);
router.get('/shortlist', protect, adminOnly, getShortlist);
router.get('/stats', protect, adminOnly, getStats);

module.exports = router;
