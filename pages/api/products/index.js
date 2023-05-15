import { products } from './../../../public/data.js';

export default async function handler(req, res) {
  res.status(200).json(products);
}
