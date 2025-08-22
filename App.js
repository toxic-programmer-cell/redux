import { createStore } from "redux";
import { productList } from "./productList.js";

const initialState = {
  product: productList,
  cartItem: [],
  wishList: [],
};

console.log(initialState);

const ADD_TO_CART = "cart/additem";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartItem: [...state.cartItem, action.payload] };
    default:
      return state;
  }
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch({
  type: "cart/additem",
  payload: { productId: 1, quantity: 1 },
});
