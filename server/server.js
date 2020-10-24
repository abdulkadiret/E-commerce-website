import express from 'express';
const app = express();
import data from './data';

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.use(express.static('client/build'));

app.listen(5000, () => {
  console.log('Server started at http://localhost:5000');
});
