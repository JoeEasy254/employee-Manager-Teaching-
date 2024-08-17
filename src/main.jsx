import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import ListEmployees from "./pages/ListEmployees";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/display",
    element: <ListEmployees />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
