import React, {FC} from "react";

import Filter from "../Filter";
import PageButtons from "../PageButtons";
import ProductCounter from "../ProductCounter";

import {StyledProductControl} from "./styles";

interface Props {
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
  sortItems: (sortBy: string) => void;
  quantity: number | undefined;
}

const ProductControl: FC<Props> = ({currentPage, nextPage, prevPage, sortItems, quantity}) => {
  return (
    <StyledProductControl>
      <ProductCounter currentPage={currentPage} quantity={quantity} />
      <Filter sortItems={sortItems} />
      <PageButtons nextPage={nextPage} prevPage={prevPage} />
    </StyledProductControl>
  );
};

export default ProductControl;
