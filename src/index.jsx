import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { configureFirebase } from "./firebase-config";

configureFirebase()
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);