import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ALL_TOOLS, BASE_URL } from "./allTools";
import "./index.css";
import { Blog } from "./routes/blog/blog";
import PageNotFound from "./routes/error/pageNotFound";
import Root from "./routes/root/root";
import { Welcome } from "./tools/welcome/Welcome";

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: BASE_URL + "/",
        element: <Welcome />,
      },
      ...ALL_TOOLS,
      {
        path: BASE_URL + "/blog/:slug",
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
