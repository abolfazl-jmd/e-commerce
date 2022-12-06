import http from "./httpServices";

export const getAllCategories = () => {
  return http.get("/products/categories");
};
