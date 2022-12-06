import http from "./httpServices";

export const getOneProduct = (id) => {
  return http.get(`/products/${id}`);
};
