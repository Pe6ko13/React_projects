import { Link } from "react-router-dom";
import style from "./Header.module.css";
import NavigationItem from "./NavigationList/NavigationItem.js";
import listStyle from "./NavigationList/NavigationItem.module.css";

const Header = () => {
  return (
    <nav className={style.navigation}>
      <ul>
        <li className={listStyle.listItem}>
          <img src="./white-origami-bird.png" alt="white origami" />
        </li>

        <Link to="/">
          <NavigationItem>Home</NavigationItem>
        </Link>
        <Link to="/about/pesho">
          <NavigationItem>About</NavigationItem>
        </Link>
        <NavigationItem>Going to 3</NavigationItem>
        <NavigationItem>Going to 4</NavigationItem>
        <NavigationItem>Going to 5</NavigationItem>
        <NavigationItem>Going to 6</NavigationItem>
        <NavigationItem>Going to 7</NavigationItem>
        <NavigationItem>Going to 8</NavigationItem>
        <NavigationItem>Going to 9</NavigationItem>
        <NavigationItem>Going to 10</NavigationItem>
        <NavigationItem>Going to 11</NavigationItem>
      </ul>
    </nav>
  );
};

export default Header;
