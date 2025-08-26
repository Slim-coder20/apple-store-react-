import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense>
                <Main />
            </Suspense>
        ),
        children: [
            { index: true, element: <Home /> },
            { path: "/shop", element: <Shop /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
