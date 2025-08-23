import { combineReducers, createStore } from "redux";
import productReducer from "./productReducer";
import cartReducer, {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "./cartReducer";
import wishListReducer, {
  addProductWishlist,
  removeProductWishlist,
} from "./wishListReducer";

const reducer = combineReducers({
  product: productReducer,
  cartItem: cartReducer,
  wishList: wishListReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch(addToCart(1));
store.dispatch(addToCart(2));
store.dispatch(addToCart(3, 3));
store.dispatch(removeFromCart(2));
store.dispatch(increaseQuantity(1));
store.dispatch(decreaseQuantity(1));
store.dispatch(decreaseQuantity(1));

store.dispatch(addProductWishlist(3));
store.dispatch(removeProductWishlist(3));
