import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { getAllProducts } from "../../Services/productsServices";

const ProductsList = () => {
  const [products, setProducts] = useState(null);

  const getProductsHandler = async () => {
    try {
      const response = await getAllProducts();
      const data = response.data;

      if (!data) throw new Error("Sorry, please try again!");
      console.log(data);
      setProducts(data);
    } catch (error) {
      return <span>{error.message}</span>;
    }
  };

  useEffect(() => {
    getProductsHandler();
  }, []);

  return (
    <section className="border flex flex-wrap gap-5 items-center justify-evenly p-4 w-3/4 my-8 mx-auto">
      {products &&
        products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
    </section>
  );
};

export default ProductsList;
