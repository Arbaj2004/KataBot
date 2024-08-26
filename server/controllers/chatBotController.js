const { Client } = require('@botpress/client');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const client = new Client({
    token: 'bp_pat_DW3y18TCbac1oMnR6vT8SfRjlv8vOY0aG899',
    botId: 'c560a319-46a8-4996-b25b-f11f6e920838',
    workspaceId: 'wkspace_01J62A0CQR0AFAGY23CT1GY1VP'
})
// https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=c560a319-46a8-4996-b25b-f11f6e920838
// const { tables } = await client.listTables({})
// const { files } = await client.listFiles({})

async function allTickets() {
    const { rows, limit, offset, count } = await client.findTableRows({
        table: 'Unanswered_QuestionsTable',
        limit: 50,
        offset: 0,
        filter: {},
        orderBy: 'row_id',
        orderDirection: 'asc'
    })
    return rows;
}

exports.getAllTickets = catchAsync(async (req, res, next) => {
    const rows = await allTickets();
    console.log(rows);
    if (!rows) {
        return next(new AppError('No ticket found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            rows
        }
    });
})

async function allActiveTickets() {
    const { rows, limit, offset, count } = await client.findTableRows({
        table: 'Unanswered_QuestionsTable',
        filter: {
            $or: [
                { active: true },
                { active: null }
            ]
        }
    })
    return rows;
}
exports.getAllActiveTickets = catchAsync(async (req, res, next) => {
    const rows = await allActiveTickets();
    console.log(rows);
    if (!rows) {
        return next(new AppError('No ticket found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            rows
        }
    });
})

async function getOneTicket(cid) {
    const { rows, limit, offset, count } = await client.findTableRows({
        table: 'Unanswered_QuestionsTable',
        filter: {
            id: cid  // Filter for rows where `id` matches `cid`
        },
        limit: 1,  // Assuming you want only one row
        offset: 0
    })
    return rows;
}

exports.getTicketById = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    const rows = await getOneTicket(parseInt(id, 10));
    console.log(rows);
    if (!rows) {
        return next(new AppError('No ticket found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            rows
        }
    });
})

exports.updateTicket = catchAsync(async (req, res, next) => {
    console.log("asjdfhlasjkdhf");
    const { id } = req.params;
    console.log(id);
    console.log(req.body.answer)
    // id = parseInt(id, 10);
    const { rows, errors, warnings } = await client.updateTableRows({
        table: 'Unanswered_QuestionsTable',
        rows: [
            {
                id: parseInt(id, 10),
                Active: false,
                Answer: req.body.answer.answer,
            }
        ]
    })
    console.log(rows);
    if (!rows) {
        return next(new AppError('No ticket found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            rows
        }
    });
})