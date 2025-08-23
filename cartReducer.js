// Action Type
const ADD_TO_CART = "cart/addItem";
const REMOVE_FROM_CART = "cart/removeItem";
const INCREASE_QUANTITY = "cart/increaseQuantity";
const DECREASE_QUANTITY = "cart/decreaseQuantity";

// Action Creators
export const addToCart = (productId, quantity = 1) => {
  return { type: ADD_TO_CART, payload: { productId, quantity } };
};

export const removeFromCart = (productId) => {
  return { type: REMOVE_FROM_CART, payload: { productId } };
};

export const increaseQuantity = (productId) => {
  return { type: INCREASE_QUANTITY, payload: { productId } };
};
export const decreaseQuantity = (productId) => {
  return { type: DECREASE_QUANTITY, payload: { productId } };
};

// Reducer
export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    case INCREASE_QUANTITY:
      return state.map((item) => {
        if (item.productId === action.payload.productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    case DECREASE_QUANTITY:
      return state
        .map((item) => {
          if (item.productId === action.payload.productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    default:
      return state;
  }
}
