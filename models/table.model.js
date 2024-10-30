// models/table.model.js
const mongoose = require('mongoose');

const TableSchema = new mongoose.Schema({
    number: { type: Number, required: true, unique: true },
    capacity: { type: Number, required: true },
    isReserved: { type: Boolean, default: false },
});

module.exports = mongoose.model('Table', TableSchema);
