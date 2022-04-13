import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Products from "./Products";
import Cart from "./Cart";

function App() {
  return (
    <Wrapper>
      <TitleWrapper>
        <h1>useReducer Hook Starter Project</h1>
        <p>
          A <a href="designcode.io">Design+Code</a> tutorial
        </p>
      </TitleWrapper>
      <LinksWrapper>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </LinksWrapper>
      <Router>
        <Products path="/" />
        <Cart path="/cart" />
      </Router>
    </Wrapper>
  );
}

export default App;
