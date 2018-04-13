import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./configureStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
