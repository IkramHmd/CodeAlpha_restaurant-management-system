// models/order.model.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }],
    table: { type: mongoose.Schema.Types.ObjectId, ref: 'Table' },
    status: { type: String, default: 'pending' },
    totalAmount: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
