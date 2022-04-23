import React from "react";

import Filter from "../Filter";
import PageButtons from "../PageButtons";
import ProductCounter from "../ProductCounter";

import {StyledProductControl} from "./styles";

const ProductControl = () => {
  return (
    <StyledProductControl>
      <ProductCounter />
      <Filter />
      <PageButtons />
    </StyledProductControl>
  );
};

export default ProductControl;
