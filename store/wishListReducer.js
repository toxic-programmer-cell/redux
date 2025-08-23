// Action Types
const ADD_TO_WISHLIST = "wishList/addItem";
const REMOVE_FROM_WISHLIST = "wishList/removeItem";

// Action Creators
export const addProductWishlist = (productId) => {
  return { type: ADD_TO_WISHLIST, payload: { productId } };
};

export const removeProductWishlist = (productId) => {
  return { type: REMOVE_FROM_WISHLIST, payload: { productId } };
};

// Reducers
export default function wishListReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];

    case REMOVE_FROM_WISHLIST:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    default:
      return state;
  }
}
