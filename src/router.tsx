import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const DefaultLayout = lazy(() => import("./layouts/DefaultLayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ToolLayout = lazy(() => import("./layouts/ToolLayout"));
const MapPage = lazy(() => import("./pages/MapPage"));


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
    path: "/map",
    element: <ToolLayout />,
    children: [
      {
        index: true,
        element: <MapPage />
      }
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
