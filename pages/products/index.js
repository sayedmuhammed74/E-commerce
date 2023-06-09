import Product from '@/components/Product';
import { products } from './../../public/data.js';
import Head from 'next/head.js';
const Products = ({ products }) => {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <section>
        <div className="container mx-auto px-6 py-5 flex flex-col items-center justify-center md:flex-row flex-wrap gap-5">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
  // const res = await fetch('http://localhost:3000/api/products');
  // const data = await res.json();
  return {
    props: {
      products: products,
    },
  };
}

export default Products;
