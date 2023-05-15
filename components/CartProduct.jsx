const CartProduct = ({ product }) => {
  return (
    <div className="md:w-1/4 flex flex-col p-3 shadow-xl">
      {/* <div> */}
      <img src={product.image} alt={product.name} className="aspect-square" />
      {/* </div> */}
      <div className="flex justify-between">
        <h1 className="font-medium text-xl">{product.name}</h1>
        <span className="font-medium text-lg">{product.price}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 ml-2 text-gray-500">
          <span>-</span>
          <span>{product.nums}</span>
          <span>+</span>
        </div>
        <button className="self-end font-medium px-2 py-1.5 rounded-md my-2 bg-red-400">
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
