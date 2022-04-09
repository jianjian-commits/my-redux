import React from "react";
import { createRoot } from "react-dom/client";
import Count1 from "./components/Counter1";
import Count2 from "./components/Counter2";

createRoot(document.getElementById("root")).render(
  <>
    <Count1 />
    <Count2 />
  </>
);
