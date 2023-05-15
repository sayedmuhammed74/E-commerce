import { cart } from './../../../public/cart.js';

export default async function handler(req, res) {
  res.status(200).json(cart);
}
