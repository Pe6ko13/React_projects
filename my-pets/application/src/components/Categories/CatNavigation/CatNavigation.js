import { NavLink } from "react-router-dom";

const CatNavigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/categories/all"
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories/Cat">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/categories/Dog">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/categories/Parrot">Parrots</NavLink>
        </li>
        <li>
          <NavLink to="/categories/Reptile">Reptiles</NavLink>
        </li>
        <li>
          <NavLink to="/categories/Other">Other</NavLink>
        </li>
      </ul>
      <style>{`
        .active {
          background-color: lightgreen !important;
        }
      `}</style>
    </nav>
  );
};

export default CatNavigation;
