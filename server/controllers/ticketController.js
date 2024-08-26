const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Ticket = require('../models/ticketSchema');

exports.getAllActiveTickets = catchAsync(async (req, res, next) => {
    const tickets = await Ticket.find({ 'active': true });
    res.status(200).json({
        status: 'success',
        results: tickets.length,
        data: {
            tickets
        }
    });
});

exports.getAllNonActiveTickets = catchAsync(async (req, res, next) => {
    const tickets = await Ticket.find({ 'active': false });
    res.status(200).json({
        status: 'success',
        results: tickets.length,
        data: {
            tickets
        }
    });
});

exports.getAllTickets = catchAsync(async (req, res, next) => {
    const tickets = await Ticket.find();
    res.status(200).json({
        status: 'success',
        results: tickets.length,
        data: {
            tickets
        }
    });
});

exports.createTicket = catchAsync(async (req, res, next) => {
    const { email, query } = req.body;
    const ticket = await Ticket.create({
        email,
        query,
        active: true,
        response: " "
    });
    console.log(ticket);

    res.status(200).json({
        status: 'success',
        data: {
            ticket
        }
    });
});

exports.solveTickets = catchAsync(async (req, res, next) => {
    const { _id, response } = req.body;
    const ticket = await Ticket.findOne({
        _id
    });
    console.log(ticket, response);
    ticket.response = response;
    ticket.active = false;
    await ticket.save();

    const message = `Your query is ${ticket.query} \n and response:  ${response}.`;
    console.log(message);
    try {
        // await sendEmail({
        //     email: tempUser.email,
        //     subject: `Response for your query :${ticket.query}`,
        //     message
        // });

    } catch (err) {
        ticket.response = " ";
        ticket.active = false;
        await tempUser.save({ validateBeforeSave: false });

        return next(new AppError('There was an error sending the email. Try again later!', 500));
    }

    res.status(200).json({
        status: 'success',
        data: {
            ticket
        }
    });
});

exports.getBlogById = catchAsync(async (req, res, next) => {
    const { id } = req.params;

    // Find the blog post by ID
    const blog = await Ticket.findById(id);

    // If no blog post is found, return an error
    if (!blog) {
        return next(new AppError('No blog post found with that ID', 404));
    }

    // Send the blog post data as response
    res.status(200).json({
        status: 'success',
        data: {
            blog
        }
    });
});