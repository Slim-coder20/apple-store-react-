import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import  CartProvider  from "./store/cart-context"
import { useState } from "react"

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
