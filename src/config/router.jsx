import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import ProductListing from "../pages/ProductListing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/detail",
        element: <ProductDetail/>
    },
    {
        path: "/products",
        element: <ProductListing/>
    }
]);

export default router;
