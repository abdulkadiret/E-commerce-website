import express from 'express';
const app = express();
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import morgan from 'morgan';

dotenv.config();

//Get access to mongodbUrl
const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  //verify the connection
  .then(() => {
    console.log('MongoDB Connected... ');
  })
  .catch((error) => console.log(error.reason));

// middlewares
app.use(express.json()); // for body parser
app.use(morgan('tiny'));
// route middlewares
app.use('/api/users', authRoutes);
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
  const ProductId = req.params.id;
  const product = data.products.find((x) => x.productId === ProductId);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: 'Product Not Found.' });
  }
});
app.use(express.static('client/build'));

app.listen(5000, () => {
  console.log('Server started at http://localhost:5000');
});
