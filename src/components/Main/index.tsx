import React from "react";

import Catalog from "../Catalog";
import ProductControl from "../ProductControl";

import {StyledMain} from "./styles";

const Main = () => {
  return (
    <StyledMain>
      <ProductControl />
      <Catalog />
    </StyledMain>
  );
};

export default Main;