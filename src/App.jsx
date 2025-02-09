import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import SayHi from "./components/SayHi";
import Test from "./components/Test";
import Count from "./components/Count";
import Users from "./components/Users";
import All from "./components/Users/All";
import Store from "./components/Users/Store";
import Show from "./components/Users/Show";
import Update from "./components/Users/Update";
import Posts from "./components/Posts";
import ParentComponent from "./components/context/ParentComponent";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="navbar bg-base-100 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                
                <li>
                  <NavLink to="/test">Test</NavLink>
                </li>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/count">Count</NavLink>
                </li>

                <li>
                  <NavLink to="/posts">Posts</NavLink>
                </li>
                <li>
                <NavLink to="/ParentComponent">ParentComponent</NavLink>
              </li>
                <li>
                  <NavLink to="/users">Users</NavLink>
                  <ul className="p-2">
                    <li>
                      <NavLink to="/users/store">Store</NavLink>
                    </li>
                    <li>
                      <NavLink to="/users/all">all</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              
              <li>
                <NavLink to="/test">Test</NavLink>
              </li>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/count">Count</NavLink>
              </li>
              <li>
                <NavLink to="/posts">Posts</NavLink>
              </li>
              <li>
                <NavLink to="/ParentComponent">ParentComponent</NavLink>
              </li>
              <li>
                <details>
                  <summary>
                    <NavLink to="/users">Users</NavLink>
                  </summary>
                  <ul className="p-2">
                    <li>
                      <NavLink to="/users/store">Store</NavLink>
                    </li>
                    <li>
                      <NavLink to="/users/all">all</NavLink>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>

        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<SayHi />} />
          <Route path="/count" element={<Count />} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/ParentComponent" element={<ParentComponent/>} />
          {/* nested user route */}
          <Route path="/users" element={<Users />}>
            <Route index element={<All />} />
            <Route path="all" element={<All />} />
            <Route path="store" element={<Store />} />
            <Route path=":id" element={<Show />} />
            <Route path=":id/edit" element={<Update />} />
          </Route>
          {/* end nested user route */}
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
