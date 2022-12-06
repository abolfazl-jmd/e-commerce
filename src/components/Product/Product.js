import { FaRegHeart, FaHeart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Product = ({ id, title, image, price }) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <NavLink
      className="relative w-96 h-72 flex flex-col rounded-xl border overflow-hidden cursor-pointer hover:-translate-y-1 transition-all hover:shadow-md"
      to={`${pathname}/${id}`}
    >
      <article>
        <div className="flex-1 w-full h-3/4">
          <img className="w-full h-full" src={image} alt="electronics" />
        </div>
        <div className="flex-1 flex items-center justify-between px-4 font-sans">
          <span className="text-sm ">{title}</span>
          <span className="text-sm ">$ {price}</span>
        </div>
        {/* {liked ? (
        <FaHeart className="absolute top-4 text-secondary left-4 text-xl" />
      ) : (
        <FaRegHeart className="absolute top-4 text-primary-light left-4 text-xl" />
      )} */}
        <FaRegHeart className="absolute top-4 text-secondary left-4 text-xl" />
      </article>
    </NavLink>
  );
};

export default Product;
