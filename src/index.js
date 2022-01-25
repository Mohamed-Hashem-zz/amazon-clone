import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";
import "normalize.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./ContextApi/StateProvider/StateProvider";
import { reducer, initialState } from "./ContextApi/Reducer/Reducer";
import { ToastContainer } from "react-toastify";
import Favicon from "react-favicon";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <Favicon url="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png" />
        <ToastContainer />
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
