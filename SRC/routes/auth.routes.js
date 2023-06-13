// En point de login
import { Router } from 'express';
const router = Router();

import * as authCtrl from '../controllers/auth.controllers.js'
import { verifySignup } from '../middlewares'

router.post('/signup', [verifySignup.checkDuplicateUsernameOrmail, verifySignup.checkDuplicateUsernameOrmail], authCtrl.signup)
router.post('/signin', verifySignup.checkRolesExisted, authCtrl.signin)

export default router; // este codigo es solo pra exportar el enrutador de express