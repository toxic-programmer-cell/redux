import { createStore } from "redux";

const initialState = {
  count: 0,
  name: "Redux Example",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        name: "Redux Example Updated",
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log(store.getState());

store.dispatch({ type: "INCREMENT" });
console.log(store.getState());
