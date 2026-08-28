import { Link } from "react-router";
export const Navbar = () => {
  return (
    <div className="max-lg:collapse bg-white text-black lg:mb-48 shadow-sm lg:w-full ">
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <Link to="/" className=" text-xl text-black">
            JSD-13
          </Link>
        </div>
        <div className="navbar-center hidden  lg:flex  lg:justify-items-end lg:items-end">
          <ul className="menu menu-horizontal px-1 text-2xl text-black">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="owner">Owner</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
