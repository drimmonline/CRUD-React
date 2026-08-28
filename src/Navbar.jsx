export const Navbar = () => {
  return (
    <div className="max-lg:collapse bg-white text-black lg:mb-48 shadow-sm w-full ">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />

      <div className="collapse-title navbar">
        <div className="navbar-start">
          <button className="btn btn-ghost text-xl text-black">JSD-13</button>
        </div>
        <div className="navbar-center hidden  lg:flex  lg:justify-items-end lg:items-end">
          <ul className="menu menu-horizontal px-1 text-2xl text-black">
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>Owner</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
