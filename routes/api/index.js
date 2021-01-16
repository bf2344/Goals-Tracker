const router = require('express').Router()
const goalsRoutes = require('./goals-routes');
const statsRoutes = require('./stats-routes');
const ticketRoutes = require('./ticket-routes');
const goalRoutes = require('./goal-routes');

router.use('/goals', goalsRoutes)
router.use('/stats', statsRoutes)
router.use('/tickets', ticketRoutes)
router.use('/user', goalRoutes)

module.exports = router;