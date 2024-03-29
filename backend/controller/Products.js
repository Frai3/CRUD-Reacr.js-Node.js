import Product from "../models/productModel.js"

export const getAllProduct = async (req, res) => {
    try {
        const products = await Product.findAll()
        res.json(products)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getProductById = async (req, res) => {
    try {
        const products = await Product.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(products[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createProduct = async (req, res) => {
    try {
        await Product.create(req.body)
        res.json({
            "message" : "Product created"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message" : "Product updated"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message" : "Product deleted"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}