import Express from "express";
import { getAllProduct, createProduct, getProductById, updateProduct, deleteProduct } from "../controller/Products.js";

const router = Express.Router()

router.get('/', getAllProduct)
router.get('/:id', getProductById)
router.post('/', createProduct)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router;