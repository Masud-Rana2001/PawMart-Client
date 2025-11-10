import { NavLink } from "react-router";

function MyNavlink({ to, children, className = "" }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative ${className} ${
          isActive
            ? "border-b-2 border-[#A3D9A5]  ": ""
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default MyNavlink;
