"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/**
 * Middleware to verify JWT token from Authorization header
 * Expects token in format: "Bearer <token>"
 */
const verifyToken = (req, res, next) => {
    try {
        // Get the auth header
        const authHeader = req.headers.authorization;
        // Check if auth header exists
        if (!authHeader) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }
        // Check if the format is correct (Bearer token)
        const parts = authHeader.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer') {
            return res.status(401).json({ message: 'Invalid token format. Use "Bearer <token>"' });
        }
        const token = parts[1];
        // Verify the token using JWT secret
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'default_secret');
        // Add user info to the request object for use in subsequent middleware/routes
        req.user = decoded;
        // Proceed to the next middleware/route handler
        next();
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            return res.status(401).json({ message: 'Invalid token.' });
        }
        else if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
            return res.status(401).json({ message: 'Token expired.' });
        }
        return res.status(500).json({ message: 'Internal server error.' });
    }
};
exports.verifyToken = verifyToken;
const isAdmin = (req, res, next) => {
    var _a;
    if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== 'admin') {
        return res.status(403).json({ message: 'Access denied. Admin privileges required.' });
    }
    next();
};
exports.isAdmin = isAdmin;
