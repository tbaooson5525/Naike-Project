import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

const router = createBrowserRouter([
    {
        path: "/test",
        element: <Navbar/>,
    },
   
]);

export default router;
