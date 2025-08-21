import { createStore } from "redux";

const initialState = {
  count: 0,
  name: "initial state",
};

const INCREMENT = "count/increment";
const DECREMENT = "count/decrement";
const INCRESE_BY = "count/incrementBy";
const DECRESE_BY = "count/decrementBy";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        name: "state Incremented",
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        name: "state Decremented",
      };
    case INCRESE_BY:
      return {
        ...state,
        count: state.count + action.payload,
        name: "state Incremented by " + action.payload,
      };
    case DECRESE_BY:
      return {
        ...state,
        count: state.count - action.payload,
        name: "state Incremented by " + action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log(store);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: INCRESE_BY, payload: 5 });
store.dispatch({ type: DECRESE_BY, payload: 3 });
