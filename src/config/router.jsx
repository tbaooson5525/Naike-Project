import { createBrowserRouter } from "react-router-dom";
import ProductListing from "../pages/ProductListing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>
    }
    ,{
        path: "/products/",
        element: <ProductListing />,
    },
]);

export default router;
