import { SET_CATEGORIES, SET_ORDERS } from "../actions";

const initialState = {
  categories: [],
  orders: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case SET_ORDERS: {
      return {
        ...state,
        orders: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
