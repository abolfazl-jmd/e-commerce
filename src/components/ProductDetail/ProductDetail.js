import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToCart,
  deleteFromCart,
} from "../../redux/shoppingCart/shoppingCartActions";
import { getOneProduct } from "../../Services/oneProductServices";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.cart);

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

  const addToCartHandler = (id) => {
    const isProductInCart = shoppingCart.find((product) => product.id === id);

    if (!isProductInCart) {
      dispatch(addToCart(product));
      setIsProductInCart(true);
    } else {
      dispatch(deleteFromCart(product.id));
      setIsProductInCart(false);
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
          <button
            className="w-36 border p-2 capitalize bg-secondary text-primary-light disabled:bg-slate-400"
            onClick={() => addToCartHandler(product.id)}
          >
            {isProductInCart ? "Delete from cart" : "Add to cart"}
          </button>
        </article>
      );
    }
  };

  return <>{renderProduct()}</>;
};

export default ProductDetail;
