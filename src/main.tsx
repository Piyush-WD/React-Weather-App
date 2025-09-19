// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Make sure the path is correct
import "./index.css"; // Optional styling

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
