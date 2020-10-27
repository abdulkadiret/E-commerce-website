import express from 'express';
const app = express();
import data, { products } from './data';

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
