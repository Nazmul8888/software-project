import { NavLink } from "react-router-dom";


const NavBar = () => {
    const navLink = <>


    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About Us</NavLink></li>
    <li><NavLink to='/services'>Services</NavLink></li>
    <li><NavLink to='/microsoft '>Microsoft Dynamics 365</NavLink></li>
    <li><NavLink to='/case study'>Case Study</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
        
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">XRM ROI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-blue-400 hover:to-green-300">Contact Us</a>
  </div>
</div>
        </div>
    );
};

export default NavBar;