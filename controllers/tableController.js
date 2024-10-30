// controllers/tableController.js
const Table = require('../models/table.model');

exports.createTable = async (req, res) => {
    try {
        const table = new Table(req.body);
        await table.save();
        res.status(201).json(table);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add other methods like getTable, updateTable, deleteTable
