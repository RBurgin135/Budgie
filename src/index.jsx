import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//firebase hooks
import {initializeApp} from 'firebase/app'
import {getAnalytics} from 'firebase/analytics'

const app = initializeApp({
    apiKey: "AIzaSyAx3w5Owm37Quj5Y6XSRyAqauaeSUhh35E",
    authDomain: "budgie-c2464.firebaseapp.com",
    databaseURL: "https://budgie-c2464-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "budgie-c2464",
    storageBucket: "budgie-c2464.appspot.com",
    messagingSenderId: "599092730183",
    appId: "1:599092730183:web:bb3e327813ad79cccbd462",
    measurementId: "G-D80EE2NXHJ"
})
const analytics = getAnalytics(app)


import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);