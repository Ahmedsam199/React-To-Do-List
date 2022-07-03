import { createStore } from "redux";
const reducerFN = (state = { token: "",ID:"" }, action) => {
  if (action.type === "add") {
    return { state: (state.action = action.payload) };
  } else {
    return state;
  }
};
const store = createStore(
  reducerFN,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;
