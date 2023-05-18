import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import ProductListing from "../pages/ProductListing";
import RootLayout from "../components/RootLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: ":category",
                element: <ProductListing />,
            },
            {
                path: "products/:productId",
                element: <ProductDetail />,
            },
        ],
      },
]);

export default router;
