import React from "react";

import Filter from "../Filter";
import ProductCounter from "../ProductCounter";

import {StyledProductControl} from "./styles";

const ProductControl = () => {
  return (
    <StyledProductControl>
      <ProductCounter />
      <Filter />
    </StyledProductControl>
  );
};

export default ProductControl;
