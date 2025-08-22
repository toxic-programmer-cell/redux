export const ADD_TO_CART = "cart/addItem";
export const REMOVE_FROM_CART = "cart/removeItem";
export const INCREASE_QUANTITY = "cart/increaseQuantity";
export const DECREASE_QUANTITY = "cart/decreaseQuantity";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    case INCREASE_QUANTITY:
      return state.cartItem.map((item) => {
        if (item.productId === action.payload.productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    case DECREASE_QUANTITY:
      return state.cartItem
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
