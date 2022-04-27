import React, {FC} from "react";

import {UseFetchState} from "~/hooks/useFetch";
import CatalogItem from "../CatalogItem";
import {ProductAPIResponse} from "../Main";
import Spinner from "../Spinner";

import {StyledCatalog, StyledContainer} from "./styles";

interface Props {
  currentPage: number;
  fetchState: UseFetchState<ProductAPIResponse[]>;
}

const Catalog: FC<Props> = ({currentPage, fetchState}) => {
  if (fetchState.state === "loading" || fetchState.state === "idle") {
    return (
      <StyledContainer>
        <Spinner />
      </StyledContainer>
    );
  }

  if (fetchState.state === "error" || !fetchState.data) {
    return <div>An error has occurred</div>;
  }

  const catalogItems = fetchState.data
    .slice(currentPage, currentPage + 16)
    .map((item) => <CatalogItem key={item._id} {...item} />);

  return <StyledCatalog>{catalogItems}</StyledCatalog>;
};

export default Catalog;
