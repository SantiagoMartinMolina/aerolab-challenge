import React, {FC} from "react";

import ArrowLeft from "~/assets/icons/ArrowLeft";
import ArrowRight from "~/assets/icons/ArrowRight";

import {StyledPageButtons} from "./styles";

interface Props {
  nextPage: () => void;
  prevPage: () => void;
}

const PageButtons: FC<Props> = ({nextPage, prevPage}) => {
  return (
    <StyledPageButtons>
      <button onClick={prevPage}>
        <ArrowLeft />
      </button>
      <button onClick={nextPage}>
        <ArrowRight />
      </button>
    </StyledPageButtons>
  );
};

export default PageButtons;
