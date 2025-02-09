import {  Outlet } from "react-router-dom";

const Users = () => {
    return (
        <>
            {/* <nav className="text-center	">
                <NavLink to="all">All</NavLink>
                <NavLink to="store">Store</NavLink>
            </nav> */}
            <Outlet />

        </>
    );
}

export default Users;