import { JwtPayload } from '../Middleware/authMiddleware'; // Adjust path based on your structure

declare module 'express' {
  interface Request {
    user?: JwtPayload; // Matches the structure added by authenticateToken
  }
}