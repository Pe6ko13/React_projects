import styled from "styled-components";

import { shopData } from "../ShopData/ShopData";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <>
      <Title>Let's Shopping</Title>

      <ProductsWrapper>
        {shopData.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </ProductsWrapper>
    </>
  );
};

export default Products;

const Title = styled.p`
  font-weight: bold;
  font-size: 32px;
  margin-top: 20px;
  text-align: center;
`;

const ProductsWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;
