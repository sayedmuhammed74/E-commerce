import CartProduct from '@/components/CartProduct';
import Link from 'next/link';
import { cart } from './../../public/cart.js';
const Cart = ({ cart }) => {
  return (
    <section>
      <div className="container mx-auto px-12 py-6 flex flex-col my-7">
        <h1 className="font-semibold text-2xl mb-5 text-slate-900">
          Your Shopping Cart
        </h1>
        {cart.length == 0 && (
          <h1 className="text-center font-medium text-slate-900 text-3xl my-5">
            Empty
          </h1>
        )}
        <div className="flex flex-col md:flex-row justify-center space-y-1 gap-5">
          {cart.map((item) => (
            <CartProduct product={item} key={item.id} />
          ))}
        </div>
        <div className="flex justify-between items-center mt-5 md:px-6">
          <h1 className="font-medium text-lg md:text-xl">
            Subtotal: <span>250$</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-3">
            <button className="font-medium px-3 py-2 bg-green-400 rounded-md text-sm md:text-base">
              EMPTY CART
            </button>
            <Link href="/checkout">
              <button className="font-medium px-3 py-2 bg-red-400 rounded-md text-base">
                CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getStaticProps() {
  // const res = await fetch('http://localhost:3000/api/cart');
  // const data = await res.json();

  return {
    props: {
      cart: cart,
    },
  };
}

export default Cart;
