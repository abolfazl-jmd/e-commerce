import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../Services/oneProductServices";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  const getProductDetailsHandler = async () => {
    try {
      const response = await getOneProduct(id);
      const data = response.data;
      console.log(data);

      if (!data) throw new Error("Sorry, please try again!");

      setProduct(data);
    } catch (error) {
      return <span>{error.message}</span>;
    }
  };

  useEffect(() => {
    getProductDetailsHandler();
  }, [id]);

  const renderProduct = () => {
    if (product) {
      return (
        <article className="w-1/2 border mx-auto my-12 p-4 shadow-md rounded-md">
          <div className="w-full h-60">
            <img
              src={product.image}
              className="w-1/2 h-full mx-auto"
              alt={product.title}
            />
          </div>
          <div>
            <div className="flex items-center justify-between my-4">
              <span className="font-bold">{product.title}</span>
              <span className="font-bold">$ {product.price}</span>
            </div>
            <span>{product.rating.rate} out of 5</span>
          </div>
          <div className="my-4">
            <p>{product.description}</p>
          </div>
          <button className="w-32 border p-2 capitalize bg-secondary text-primary-light">
            add to cart
          </button>
        </article>
      );
    }
  };

  return <>{renderProduct()}</>;
};

export default ProductDetail;
