import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client"; // ✅ انتبه هنا!
import { Provider } from "react-redux";
import store from "./rudex/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
