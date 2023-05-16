import { Inter } from 'next/font/google';
import Product from '@/components/Product';
import { products } from '@/public/data';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

export default function Home({ products }) {
  return (
    <div>
      <header className="container mx-auto object-contain relative flex items-center bg-red-500 h-[65vh]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="120"
          height="120"
          className="absolute right-0 z-10 hover:opacity-50 cursor-pointer ease-in duration-150"
        >
          <path
            d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"
            fill="rgba(255,255,255,1)"
          ></path>
        </svg>
        <div className="absolute bg-red mx-auto text-3xl font-bold z-20 w-10 h-10">
          SS
        </div>
        <div className="h-full w-full">
          <img
            src="./offers/phone.png"
            alt="sweet-shirt"
            className="absolute h-full w-full"
          />
          <img
            src="./offers/lab.png"
            alt="sweet-shirt"
            className="absolute h-full w-full"
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="120"
          height="120"
          className="absolute z-10 hover:opacity-50 cursor-pointer ease-in duration-150"
        >
          <path
            d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
            fill="rgba(255,255,255,1)"
          ></path>
        </svg>
      </header>

      {/* LATEST */}
      <section className="my-12">
        <div className="container mx-auto px-6 py-5 text-center rounded-3xl shadow-2xl bg-white">
          <h1 className="mb-5 text-3xl font-medium text-heading">Latest</h1>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {products.slice(0, 5).map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
          <Link href="/products">
            <button className="px-6 py-2.5 rounded-3xl text-white bg-gray-700  mt-5 hover:bg-gray-500 hover:text-black ease-in duration-100">
              VIEW MORE
            </button>
          </Link>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="my-12">
        <div className="container mx-auto px-6 py-5 text-center rounded-3xl shadow-2xl bg-white">
          <h1 className="mb-5 text-3xl font-medium text-heading">Products</h1>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {products.slice(0, 5).map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
          <Link href="/products">
            <button className="px-6 py-2.5 rounded-3xl text-white bg-gray-700  mt-5 hover:bg-gray-500 hover:text-black ease-in duration-100">
              VIEW MORE
            </button>
          </Link>
        </div>
      </section>

      {/* OFFERS */}
      <section className="my-12">
        <div className="container mx-auto px-6 py-5 text-center rounded-3xl shadow-2xl bg-white">
          <h1 className="mb-5 text-3xl font-medium text-heading">Offers</h1>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {products.slice(0, 5).map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
          <Link href="/products">
            <button className="px-6 py-2.5 rounded-3xl text-white bg-gray-700  mt-5 hover:bg-gray-500 hover:text-black ease-in duration-100">
              VIEW MORE
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: products,
    },
  };
}
