import { Response } from "express";
import ProductModel  from '../models/ProductSchema';
const { validationResult } = require('express-validator');

const validate = (req:Request, res:Response, next:any) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);

    next();
}

const validateProduct = async (id:number) => {
    const existsProduct = await ProductModel.findById(id);

    if (!existsProduct) throw new Error(`Product not exists`);
}

module.exports = { validate,validateProduct }
