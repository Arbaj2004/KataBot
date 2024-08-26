const express = require('express');
const authController = require('../controllers/authController');
const ticketController = require('../controllers/ticketController');
const chatBotController = require('../controllers/chatBotController')
const router = express.Router();

router.post('/forgotPassword', authController.forgotPassword)
router.use(authController.restrictTo('Admin'));
router.get('/getAllNonActiveTickets', ticketController.getAllNonActiveTickets)
router.post('/solveTickets', ticketController.solveTickets)
router.get('/solveTickets/:id', ticketController.getBlogById);
router.get('/getAllTickets', chatBotController.getAllTickets)
router.get('/getAllActiveTickets', chatBotController.getAllActiveTickets)
router.get('/getTicketById/:id', chatBotController.getTicketById)
router.patch('/updateTicket/:id', chatBotController.updateTicket)

module.exports = router;
