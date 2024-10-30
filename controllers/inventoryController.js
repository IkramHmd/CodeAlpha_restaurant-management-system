// controllers/inventoryController.js
const Inventory = require('../models/inventory.model');

exports.addInventory = async (req, res) => {
    try {
        const inventoryItem = new Inventory(req.body);
        await inventoryItem.save();
        res.status(201).json(inventoryItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add other methods like getInventory, updateInventory, deleteInventory
