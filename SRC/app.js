import express from 'express';
import morgan from 'morgan'; // Morgan es un middlewares de express
import productsRutes from './routes/products.routes.js'
import authRoutes from './routes/auth.routes.js'

import { createRoles } from './libs/initialSetup.js';

const app = express()
createRoles();

app.use(morgan('dev'))
app.use(express.json())

app.use('/api', authRoutes)
app.use('/api', productsRutes)

export default app;
// Solo sirve para configurara la configuracion de express
