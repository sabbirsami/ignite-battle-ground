import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <h2>Hello</h2>
            <Outlet />
        </div>
    );
};

export default Root;
