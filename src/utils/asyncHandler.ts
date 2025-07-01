import { RequestHandler } from 'express';

/**
 * Wraps an async route handler and passes errors to Express error middleware.
 */
export const asyncHandler = (fn: (...args: any[]) => Promise<any>): RequestHandler =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
