const router = require('express').Router()
const goalRoutes = require('./goals-routes');
const statsRoutes = require('./stats-routes');
const ticketRoutes = require('./ticket-routes');
const userRoutes = require('./user-routes');

router.use('/goals', goalRoutes)
router.use('/stats', statsRoutes)
router.use('/tickets', ticketRoutes)
router.use('/user', userRoutes)

module.exports = router;