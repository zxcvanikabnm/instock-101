import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo-instock.svg";

function Navbar() {
  return (
    <nav className="bg-slate-800 pb-25 lg:flex lg:justify-between">
      <div className="logo-container flex justify-center pt-8 pl-0 md:pl-5">
        <NavLink to="/warehouses">
          <img src={logo} alt="inStock logo" />
        </NavLink>
      </div>
      <div className="button-container flex justify-between gap-5 px-5 py-5">
        <NavLink
          to="/warehouses"
          className={({ isActive }) =>
            `main-button ${isActive ? "main-button-active" : "main-button-inactive"}`
          }
        >
          Warehouse
        </NavLink>
        <NavLink
          to="/inventory"
          className={({ isActive }) =>
            `main-button ${isActive ? "main-button-active" : "main-button-inactive"}`
          }
        >
          Inventory
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
