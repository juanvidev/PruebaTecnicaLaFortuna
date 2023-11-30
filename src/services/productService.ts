import { IProductBackend } from "interfaces/product";
import ProductModel from "../models/ProductSchema";


const getProducts = async () => {
    const [totalProducts, products] = await Promise.all([
        ProductModel.countDocuments(),
        ProductModel.find()
    ]);
    return {totalProducts, products};
}

const createProduct = async (newProduct:IProductBackend) => {
    const product = new ProductModel(newProduct);
    await product.save();

    return product;
}

const getProductById = async (id:string) => {
    const product = await ProductModel.findById(id);
    return product;
}

const updateProduct = async (id:string, newDataProduct:IProductBackend) => {

    const productUpdated = await ProductModel.findByIdAndUpdate(id, newDataProduct, { new: true })
    return productUpdated;
}

const deleteProduct = async (id:string) => {
    const productDeleted = await ProductModel.findByIdAndDelete(id);
    return productDeleted;
}

module.exports = {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
 }