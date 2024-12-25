import { StrictMode } from "react";
import React, { ReactElement } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  React.createElement(StrictMode, null, React.createElement(App, null))
);
