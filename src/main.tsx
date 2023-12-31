// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Clock from "./components/Clock.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <div>Hello world!</div>,
  },
  {
    path: "/clock",
    element: <Clock />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
);
