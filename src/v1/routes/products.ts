import {Response, Request } from 'express';
const { check } = require('express-validator');

const { Router } = require('express');

const { getProducts,getProductById, createProduct,updateProduct, deleteProduct } = require('../../controllers/products.controller');
const { validate, validateProduct } = require('../../middlewares/validate');

const router = Router();

router.get('/', getProducts);

router.get('/:id', [
    check('id', 'Id is not valid').isMongoId(),
    check('id').custom(validateProduct),
    validate
], getProductById);

router.post('/', [
    check('name', 'Product name is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty(),
    check('price', 'Price must be a number').isNumeric(),
    validate
], createProduct);

router.put('/:id', [
    check('id', 'Id is not valid').isMongoId(),
    check('id').custom(validateProduct),
    validate
], updateProduct);

router.delete('/:id', [
    check('id', 'Id is not valid').isMongoId(),
    check('id').custom(validateProduct),
    validate
], deleteProduct);

router.all("*", (req:Request, res:Response) => res.status(404).json({
    message: '404 | Not found'
}));

module.exports = router;