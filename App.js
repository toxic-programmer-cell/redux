import { createStore } from "redux";

const initialState = {
  count: 0,
  name: "initial state",
};

const counterDiv = document.getElementById("counter");
const button = document.getElementById("button");

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
        name: "state increased by " + action.payload,
      };
    case DECRESE_BY:
      return {
        ...state,
        count: state.count - action.payload,
        name: "state decresed by " + action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store);

store.subscribe(() => {
  console.log(store.getState());
  counterDiv.innerText = store.getState().count;
});

button.addEventListener("click", () => {
  store.dispatch({ type: INCREMENT });
});

// store.dispatch({ type: INCREMENT });
// store.dispatch({ type: DECREMENT });
// store.dispatch({ type: INCRESE_BY, payload: 5 });
// store.dispatch({ type: DECRESE_BY, payload: 3 });
