import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="dark:bg-black">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;