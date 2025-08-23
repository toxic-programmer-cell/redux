Before making all riducer saperately we bulk it in App.js here the code:

// const initialState = {
// product: productList,
// cartItem: [],
// wishList: [],
// };

// console.log(initialState);

// const ADD_TO_CART = "cart/addItem";
// const REMOVE_FROM_CART = "cart/removeItem";
// const INCREASE_QUANTITY = "cart/increaseQuantity";
// const DECREASE_QUANTITY = "cart/decreaseQuantity";

// const ADD_TO_WISHLIST = "wishList/addItem";
// const REMOVE_FROM_WISHLIST = "wishList/removeItem";

// const reducer = (state = initialState, action) => {
// switch (action.type) {
// case ADD_TO_CART:
// return { ...state, cartItem: [...state.cartItem, action.payload] };
// case REMOVE_FROM_CART:
// return {
// ...state,
// cartItem: state.cartItem.filter(
// (item) => item.productId !== action.payload.productId
// ),
// };
// case INCREASE_QUANTITY:
// return {
// ...state,
// cartItem: state.cartItem.map((item) => {
// if (item.productId === action.payload.productId) {
// return { ...item, quantity: item.quantity + 1 };
// }
// return item;
// }),
// };
// case DECREASE_QUANTITY:
// return {
// ...state,
// cartItem: state.cartItem
// .map((item) => {
// if (item.productId === action.payload.productId) {
// return { ...item, quantity: item.quantity - 1 };
// }
// return item;
// })
// .filter((item) => item.quantity > 0),
// };

// case ADD_TO_WISHLIST:
// return { ...state, wishList: [...state.wishList, action.payload] };

// case REMOVE_FROM_WISHLIST:
// return {
// ...state,
// wishList: state.wishList.filter(
// (item) => item.productId !== action.payload.productId
// ),
// };
// default:
// return state;
// }
// };
