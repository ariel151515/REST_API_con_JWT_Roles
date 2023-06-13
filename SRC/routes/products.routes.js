// Los enpoint relacionados con los productos (crear producto, editar, eliminar etc)
import { Router } from 'express'
const router = Router()

import * as productCtrl from '../controllers/products.controllers.js';

import { isModerator, verifyToken, isAdmin } from '../middlewares/authjwt.js'

router.post('/products', [verifyToken, isModerator], productCtrl.createProduct) // [verifyToken, isModerator]

router.get('/products', productCtrl.getProducts)

router.get('/products/:productId', verifyToken, productCtrl.getProductById)
router.put('/products/:productId', [verifyToken, isAdmin], productCtrl.updateProductById)


router.delete('/products/:productId', [verifyToken, isAdmin], productCtrl.deleteProductById)


export default router; // este codigo es solo pra exportar el enrutador de express