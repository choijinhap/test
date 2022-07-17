import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { serviceWorker } from "./mocks/browser";
serviceWorker.start({ onUnhandledRequest: "bypass" });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
