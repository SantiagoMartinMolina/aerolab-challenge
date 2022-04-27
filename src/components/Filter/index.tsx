import React, {FC} from "react";

import {StyledFilter} from "./styles";

interface Props {
  sortItems: (sortBy: string) => void;
}

const Filter: FC<Props> = ({sortItems}) => {
  return (
    <StyledFilter>
      <p>Sort by: </p>
      <button onClick={() => sortItems("lowest")}>Lowest price</button>
      <button onClick={() => sortItems("highest")}>Highest price</button>
    </StyledFilter>
  );
};

export default Filter;
