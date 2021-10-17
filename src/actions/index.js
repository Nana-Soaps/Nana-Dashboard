export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_ORDERS = "SET_ORDERS";

export const setCategories = (value) => {
  return { type: SET_CATEGORIES, payload: value };
};

export const setOrders = (value) => {
  return { type: SET_ORDERS, payload: value };
};
