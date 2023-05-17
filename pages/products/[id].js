import React from 'react';
import { products } from '@/public/data';
const ProductPage = ({ product }) => {
  return <div>{product.name}</div>;
};

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  // if (process.env.SKIP_BUILD_STATIC_GENERATION) {
  //   return {
  //     paths: [],
  //     fallback: 'blocking',
  //   };
  // }

  // Call an external API endpoint to get posts

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = products.map((product) => ({
    params: { id: product.id, slug: product.slug },
  }));

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  console.log(context.params);

  return {
    props: {
      product: products[context.params.id - 1],
    },
  };
}

export default ProductPage;
