import React from "react";
import { createRoot } from "react-dom/client";
import Count1 from "./components/Counter1";
import Count2 from "./components/Counter2";
import { Provider } from "./react-redux";
import store from "./store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Count1 />
    <Count2 />
  </Provider>
);
