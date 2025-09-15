import express from "express";
import {
    getAllProducts,
    addProduct,
    deleteProduct,
    updateProduct
} from '../controllers/inventory/app.controller';


const router = express.Router();

router.get('/', getAllProducts);
router.post('/', addProduct);
router.delete('/:id', deleteProduct);
router.patch('/:id', updateProduct);


export default router;