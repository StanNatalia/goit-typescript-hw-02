import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { Toaster } from "react-hot-toast";

const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <>
        <App />
        <Toaster position="top-center" />
      </>
    </StrictMode>
  );
}
