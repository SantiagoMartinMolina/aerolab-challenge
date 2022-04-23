import React from "react";

import ArrowLeft from "~/assets/icons/ArrowLeft";
import ArrowRight from "~/assets/icons/ArrowRight";

import {StyledPageButtons} from "./styles";

const PageButtons = () => {
  return (
    <StyledPageButtons>
      <button>
        <ArrowLeft />
      </button>
      <button>
        <ArrowRight />
      </button>
    </StyledPageButtons>
  );
};

export default PageButtons;
