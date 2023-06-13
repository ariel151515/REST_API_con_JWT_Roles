// En point del usuario
import { Router } from 'express'
const router = Router()

import * as userCtrl from '../controllers/user.controller.js'
import { authJwt, verifySignup } from '../middlewares';

router.post('/',
    [
        authJwt.verifySignup,
        authJwt.verifyAdmin,
        verifySignup.checkRolesExisted
    ], userCtrl.createUser)

export default router; // este codigo es solo pra exportar el enrutador de express