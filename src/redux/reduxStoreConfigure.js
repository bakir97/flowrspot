import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

export const configureStore = preloadedState => {
  const middlewares = [thunk];
  const middlewaresEnhancer = applyMiddleware(...middlewares);
  const storeEnhancer = [middlewaresEnhancer];
  const composedEnhancer =
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(...storeEnhancer)
      : compose(...storeEnhancer);
  const store = createStore(rootReducer, preloadedState, composedEnhancer);
  return store;
};
