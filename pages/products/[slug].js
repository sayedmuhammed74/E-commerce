import React from 'react';
import { products } from '@/public/data';
import Product from '@/components/Product';
const ProductPage = ({ product }) => {
  return (
    <div className="flex justify-center items-center">
      <Product product={product} />
    </div>
  );
};

export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  // console.log(context.params);
  let item;
  products.map((product) => {
    product.slug == context.params.slug;
    item = product;
    return item;
  });

  return {
    props: {
      product: item,
    },
  };
}

export default ProductPage;
