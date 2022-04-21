import React from "react";

import {StyledFilter} from "./styles";

const Filter = () => {
  return (
    <StyledFilter>
      <p>Sort by: </p>
      <button>Lowest price</button>
      <button>Highest price</button>
    </StyledFilter>
  );
};

export default Filter;
