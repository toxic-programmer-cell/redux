export const ADD_TO_WISHLIST = "wishList/addItem";
export const REMOVE_FROM_WISHLIST = "wishList/removeItem";

export default function wishListReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishList: state.wishList.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };
    default:
      return state;
  }
}
