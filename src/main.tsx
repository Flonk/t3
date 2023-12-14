import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Blog } from "./routes/blog/blog";
import PageNotFound from "./routes/error/pageNotFound";
import Root from "./routes/root/root";
import { JsonPrettifier } from "./tools/json-prettifier/JsonPrettifier";
import { ShadesGenerator } from "./tools/shades-generator/ShadesGenerator";
import { Welcome } from "./tools/welcome/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/tools/shades-generator",
        element: <ShadesGenerator />,
      },
      {
        path: "/tools/json-prettifier",
        element: <JsonPrettifier />,
      },
      {
        path: "/blog/:slug",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
