import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "react-app-polyfill/ie11";
import { StateProvider } from "state/store";
import { globalState } from "state/globalState";
import { mainReducer } from "state/mainReducer";
import "styles/common.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <StateProvider initialState={globalState} reducer={mainReducer}>
      <App />
    </StateProvider>
  </BrowserRouter>,
  rootElement
);