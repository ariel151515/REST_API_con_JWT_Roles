import { Schema, model } from 'mongoose'

const productShema = new Schema({
    name: String,
    category: String,
    price: Number,
    imgURL: String
}, {
    timestamp: true,
    versionkey: false
})

export default model('Product', productShema)