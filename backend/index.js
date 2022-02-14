import Express from 'express';
import db from './config/database.js';
import productRoutes from './routes/index.js';
import cors from 'cors';

const app = Express();

try {
    await db.authenticate()
    console.log("Database connected")
} catch (error) {
    console.error('Connection Error', error)
}

app.use(cors())
app.use(Express.json())
app.use('/products', productRoutes);

app.listen(5000, () => console.log('Running port 5000'))
