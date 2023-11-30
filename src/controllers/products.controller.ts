import {Response, Request } from 'express';
import { IProductBackend } from 'interfaces/product';
const  productService = require('../services/productService');


const getProducts = async (req:Request, res:Response) => {
    try {

        const {totalProducts, products:data} = await productService.getProducts();
        return res.status(200).json({status:"OK", totalProducts, data });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
             error: 'Error in server, please contact with admin',
             totalProducts:0,
             data:[]
         });
    }
}

const createProduct = async (req:Request, res:Response) => {
    try {

        const newProduct:IProductBackend = req.body;
        const product = await productService.createProduct(newProduct);
        res.status(201).json({ status:"OK", data:product });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Error in server, please contact with admin',
            data:[]
        });
    }

}

const getProductById = async (req:Request, res:Response) => {

    const { id } = req.params;
    try{
       const product = await productService.getProductById(id);

       res.status(200).json({ status:"OK", data: product });
    }catch(error){
        console.log(error);
        res.status(500).json({
            error: 'Error in server, please contact with admin',
            data: []
        });
    }
}

const updateProduct = async (req:Request, res:Response) => {

    const { id } = req.params;
    const { _id, ...newDataProduct } = req.body;

    try {

        const productUpdated = await productService.updateProduct(id, newDataProduct);

        res.status(200).json({ status: "OK", data: productUpdated });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            error: 'Error in server, please contact with admin',
            data:[],
        });

    }
}

const deleteProduct = async (req:Request, res:Response) => {

    const { id } = req.params;

    try {

        const productDeleted = await productService.deleteProduct(id);

        res.status(200).json({
            status:"OK",
            msg: "Product deleted successfully",
            data: productDeleted
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Error in server, please contact with admin',
            data:[]
        });
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,

}