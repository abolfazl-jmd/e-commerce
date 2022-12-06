import http from "./httpServices";

export const getAllProducts = () => {
  return http.get("/products");
};
