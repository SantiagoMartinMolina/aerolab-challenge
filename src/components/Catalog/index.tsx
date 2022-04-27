import React, {FC, useEffect, useState} from "react";

import useFetch, {UseFetchState} from "~/hooks/useFetch";
import CatalogItem from "../CatalogItem";
import {ProductAPIResponse} from "../Main";

import {StyledCatalog} from "./styles";

interface Props {
  currentPage: number;
  fetchState: UseFetchState<ProductAPIResponse[]>;
}

const Catalog: FC<Props> = ({currentPage, fetchState}) => {
  if (fetchState.state === "loading" || fetchState.state === "idle") {
    return <div>cargando...</div>;
  }

  if (fetchState.state === "error" || !fetchState.data) {
    return <div>error</div>;
  }

  const catalogItems = fetchState.data
    .slice(currentPage, currentPage + 16)
    .map((item) => <CatalogItem key={item._id} {...item} />);

  return <StyledCatalog>{catalogItems}</StyledCatalog>;
};

export default Catalog;
