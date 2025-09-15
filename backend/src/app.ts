import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routerProducts from './routes/products/inventory.routes';
import { dbConnect } from './models/index';


dotenv.config();
const app = express();

app.use(bodyParser.json());

dbConnect();

app.use('/products', routerProducts);

app.get('/', (req, res) => res.send('API is running'));

const PORT = process.env.port || 3000;
app.listen(PORT, () => console.log("The server is running in", PORT));