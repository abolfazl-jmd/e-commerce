import { useEffect, useState } from "react";
import Category from "../Category/Category";
import Electronics from "../../assets/images/electronics.jpg";
import WomenClothes from "../../assets/images/women-clothes.jpg";
import MenClothes from "../../assets/images/men-clothes.jpg";
import Jwelery from "../../assets/images/jwelery.jpg";
import { getAllCategories } from "../../Services/categoriesService";

const CategoriesList = () => {
  const [categories, setCategories] = useState(null);

  const setImageCategory = (categoryName) => {
    switch (categoryName) {
      case "electronics": {
        return Electronics;
      }
      case "jewelery": {
        return WomenClothes;
      }
      case "men's clothing": {
        return MenClothes;
      }
      case "women's clothing": {
        return Jwelery;
      }
      default:
        return;
    }
  };

  const addImagesToCategoryList = (categoriesData) => {
    const newCategories = categoriesData.map((categoryItem) => {
      return {
        id: Math.floor(Math.random() * 1000),
        label: categoryItem,
        image: setImageCategory(categoryItem),
      };
    });

    return newCategories;
  };

  const getCategoriesHandler = async () => {
    try {
      const response = await getAllCategories();
      const data = response.data;

      if (!data) throw new Error("Sorry, please try again!");

      // adding images to categories
      const updatedCategories = addImagesToCategoryList(data);

      setCategories(updatedCategories);
    } catch (error) {
      return <span>{error.message}</span>;
    }
  };

  useEffect(() => {
    getCategoriesHandler();
  }, []);

  return (
    <section className="border p-4 w-3/4 my-8 mx-auto">
      <h1 className="font-bold">Categories</h1>
      <div className="flex items-center gap-4 justify-evenly my-4">
        {categories &&
          categories.map((categoryItem) => (
            <Category
              key={categoryItem.id}
              image={categoryItem.image}
              label={categoryItem.label}
            />
          ))}
      </div>
    </section>
  );
};

export default CategoriesList;
