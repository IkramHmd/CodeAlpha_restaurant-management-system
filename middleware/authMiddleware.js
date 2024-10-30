// middleware/authMiddleware.js
module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access denied' });

    // Token verification logic here
    next();
};
