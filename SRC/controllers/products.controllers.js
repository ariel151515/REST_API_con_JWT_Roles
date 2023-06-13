import Product from './../models/Products.js'

//  Funciones que estan relacionadas con los productos
export const createProduct = async (req, res) => {

    const { name, category, price, imgURL } = req.body

    console.log({ name })

    const newProduct = new Product({ name, category, price, imgURL })

    const productSave = await newProduct.save()

    res.status(201).json(productSave)
}


export const getProducts = async (req, res) => {
    const products = await Product.find();
    console.log(products)
    res.json(products)
}

export const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product)
}

export const updateProductById = async (req, res) => { // req.body es el nuevo objeto que se esta enviando
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    })
    res.status(204).json(updatedProduct)
}

export const deleteProductById = async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.productId)
    res.status(204).json(deletedProduct)
}
