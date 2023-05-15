import Product from '@/components/Product';
const Products = ({ products }) => {
  // console.log(products);
  return (
    <section>
      <div className="container mx-auto px-6 py-5 flex flex-col items-center justify-center md:flex-row flex-wrap gap-5">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/products');
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
}

export default Products;
