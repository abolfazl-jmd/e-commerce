import HomePage from "../Pages/HomePage";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";

const routes = [
  { id: 1, element: <HomePage />, path: "/" },
  { id: 2, element: <Products />, path: "/products" },
  { id: 3, element: <SingleProduct />, path: "/products/:id" },
];

export default routes;
