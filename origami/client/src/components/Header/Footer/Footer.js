import "./Footer.css";
import "./FooterItemList/FooterItemList.css";
import FooterItem from "./FooterItemList/FooterItemList";

const Footer = () => {
  return (
    <footer className="Footer">
      <ul>
        <FooterItem>Going to 1</FooterItem>
        <FooterItem>Going to 2</FooterItem>
        <FooterItem>Going to 3</FooterItem>
        <FooterItem>Going to 4</FooterItem>
        <FooterItem>Going to 5</FooterItem>
        <FooterItem>Going to 6</FooterItem>
        <FooterItem>Going to 7</FooterItem>
        <FooterItem>Going to 8</FooterItem>
        <FooterItem>Going to 9</FooterItem>
        <FooterItem>Going to 10</FooterItem>
        <FooterItem>Going to 11</FooterItem>
        <li className="listItem">
          <img src="./blue-origami-bird-flipped.png" alt="white origami" />
        </li>
      </ul>
      <p>Software University &copy; 2022</p>
    </footer>
  );
};

export default Footer;
