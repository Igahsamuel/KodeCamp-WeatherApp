import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CloudProvider from "./context/Cloud.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CloudProvider>
      <App />
    </CloudProvider>
  </React.StrictMode>
);
