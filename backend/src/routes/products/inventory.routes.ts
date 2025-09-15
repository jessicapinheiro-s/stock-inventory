import express from "express";
import {
    getAllProducts,
    addProduct,
    deleteProduct,
    updateProduct
} from '../../controllers/inventory/app.controller';
import { productSchema } from "../../schemas/products/entry-data";
import { validate } from "../../middlewares/products/validate-entry";


const routerProducts = express.Router();

routerProducts.post('/', validate(productSchema), addProduct);

routerProducts.get('/', getAllProducts);
routerProducts.post('/', addProduct);
routerProducts.delete('/:id', deleteProduct);
routerProducts.patch('/:id', updateProduct);


export default routerProducts;