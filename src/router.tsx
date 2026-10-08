import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const DefaultLayout = lazy(() => import("./layouts/DefaultLayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const BlogLayout = lazy(() => import("./layouts/BlogLayout"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ToolLayout = lazy(() => import("./layouts/ToolLayout"));
const ToolPage = lazy(() => import("./pages/ToolPage"));


export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/blog",
    element: <BlogLayout />,
    children: [
      {
        index: true,
        element: <BlogPage />
      }
    ]
  },
  {
    path: "/tool",
    element: <ToolLayout />,
    children: [
      {
        index: true,
        element: <ToolPage />
      }
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
