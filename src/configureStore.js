import { createStore, applyMiddleware } from "redux";
import app from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore() {
  let store = createStore(app, composeWithDevTools(applyMiddleware(thunk)));
  return store;
}
