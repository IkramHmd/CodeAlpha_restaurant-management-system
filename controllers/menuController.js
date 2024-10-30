// controllers/menuController.js
const Menu = require('../models/menu.model');

exports.addMenuItem = async (req, res) => {
    try {
        const menuItem = new Menu(req.body);
        await menuItem.save();
        res.status(201).json(menuItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add other methods like getMenuItems, updateMenuItem, deleteMenuItem
