import { verifyToken } from "@utils/jwt";
import { error } from "console";
import { NextFunction, Request, Response } from "express";

export interface IAuthenticatedRequest extends Request {
    user?: any;
}

export const authenticateJWT = (req: IAuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers?.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized'})
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('JWT Middleware error', error);
        return res.status(403).json({error: 'forbidden'})
    }
}