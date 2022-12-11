import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { getAllProducts } from "../../Services/productsServices";
import { useQuery } from "../../Hooks/useQuery";

const ProductsList = () => {
  const [products, setProducts] = useState(null);
  const query = useQuery();
  const searchQuery = query.get("search");
  const BASE_URL_API = process.env.REACT_APP_BASE_URL_API;

  const getProductsHandler = async () => {
    // if search query exist then we get products in that category otherwise we get all products
    if (searchQuery) {
      try {
        const response = await fetch(
          `${BASE_URL_API}/products/category/${searchQuery}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        return <span>{error.message}</span>;
      }
    } else {
      try {
        const response = await getAllProducts();
        const data = response.data;

        if (!data) throw new Error("Sorry, please try again!");
        setProducts(data);
      } catch (error) {
        return <span>{error.message}</span>;
      }
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
