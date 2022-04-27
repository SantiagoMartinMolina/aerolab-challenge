import React, {FC} from "react";

import {StyledProductCounter} from "./styles";

interface Props {
  currentPage: number;
  quantity: number | undefined;
}

const ProductCounter: FC<Props> = ({currentPage, quantity}) => {
  return (
    <StyledProductCounter>
      <p>
        {currentPage + 16} of {quantity} products
      </p>
    </StyledProductCounter>
  );
};

export default ProductCounter;
