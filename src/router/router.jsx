import { createBrowserRouter } from "react-router-dom";
import Home from "../component/home/Home";
import Root from "../root/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export default router;
