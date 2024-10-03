import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const detailSchema = Joi.object({
    medicine_id: Joi.number().required(),
    qty: Joi.number().required().min(1)
})

const createSchema = Joi.object({
    cashier_name: Joi.string().required(),
    order_date: Joi.date().required(),
    transaction_detail: Joi.array().items(detailSchema).min(1).required()
})

const createValidation = (req: Request, res: Response, next: NextFunction) => {
    const validation = createSchema.validate(req.body)
    if (validation.error) {
        // 400: Bad request
        return res.status(400).json({
            message: validation
                .error
                .details
                .map(item => item.message)
                .join()
        })
    }
    return next()
}

const updateSchema = Joi.object({
    cashier_name: Joi.string().optional(),
    order_date: Joi.date().optional(),
    transaction_detail: Joi.array().items(detailSchema).min(1).optional()
})

const updateValidation = (req: Request, res: Response, next: NextFunction) => {
    const validation = updateSchema.validate(req.body)
    if (validation.error) {
        // 400: Bad request
        return res.status(400).json({
            message: validation
                .error
                .details
                .map(item => item.message)
                .join()
        })
    }
    return next()
}

export { createValidation, updateValidation }