import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";

const router = createBrowserRouter([
    {
        path: "/test",
        element: <Navbar/>,
    },
    {
        path: "/test2",
        element: <Dropdown/>,
    },
]);

export default router;
