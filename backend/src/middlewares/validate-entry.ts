import { array, ZodObject } from "zod";
import { Request, Response, NextFunction } from "express";
export const validate = (
    schema: ZodObject
) => (
    req: Request,
    res: Response,
    next: NextFunction
) =>{
    try {
        schema.parse(req.body);
        next();
    }catch(err: any){
        return res.status(400).json({
            error: Array.isArray(err) ? err.map((item: any) => item.message) : err.message
        });
    }
}