import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET ||'your_jwt_secret_key'; // Replace with an environment variable in production

interface JwtPayload {
    id: number;
    role: string;
}

// Explicitly type the middleware to match Express's expectations
export const authenticateToken = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>
    if (!token) {
        res.status(401).json({ error: 'Access denied' });
        return; // Return void
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        (req as any).user = decoded; // Add user to request object
        next(); // Call next() to pass control to the next handler
    } catch (error) {
        res.status(403).json({ error: 'Invalid token' });
        return; // Return void
    }
};

// Explicitly type the middleware factory and the middleware itself
export const authorizeRole = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const user = (req as any).user as JwtPayload;
        if (!user || !roles.includes(user.role)) {
            res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
            return; // Return void
        }
        next(); // Call next() to pass control to the next handler
    };
};