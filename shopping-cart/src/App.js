import "./App.css";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <Wrapper>
      <TitleWrapper>
        <h1>DC Clothing Shop</h1>
      </TitleWrapper>
      <LinksWrapper>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </LinksWrapper>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  font-family: "Ariel";
  margin: 40px;
  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  text-align: center;
  row-gap: 10px;
  font-size: 32px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    font-size: 28px;
    color: #bb7250;
    padding: 10px;

    :hover {
      color: brown;
      font-weight: bold;
      border-radius: 24px;
      box-shadow: 2px 2px 2px 2px black;
    }
  }
`;
