import { NavLink } from "react-router-dom";

const Category = ({ label, image }) => {
  return (
    <NavLink
      className="w-80 h-60 flex flex-col rounded-xl border overflow-hidden cursor-pointer hover:-translate-y-1 transition-all hover:shadow-md"
      to={`/products?search=${label}`}
    >
      <article className="w-80 h-60">
        <div className="flex-1 w-full h-3/4">
          <img className="w-full h-full" src={image} alt="electronics" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <span className="text-xl ">{label}</span>
        </div>
      </article>
    </NavLink>
  );
};

export default Category;
