import React, {useState} from "react";

import useFetch from "~/hooks/useFetch";
import Catalog from "../Catalog";
import ProductControl from "../ProductControl";

import {StyledMain} from "./styles";

export type ProductAPIResponse = {
  category: string;
  cost: number;
  img: {
    hdUrl: string;
    url: string;
  };
  name: string;
  _id: string;
};

const Main = () => {
  const {fetchState, setFetchState} = useFetch<ProductAPIResponse[]>(
    "products",
    "https://coding-challenge-api.aerolab.co/products",
  );
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (fetchState.data && currentPage + 16 < fetchState.data?.length) {
      setCurrentPage(currentPage + 16);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 16);
    }
  };

  const sortItems = (sortBy: string) => {
    if (fetchState.data) {
      if (sortBy === "lowest") {
        setFetchState((prev) => ({
          ...prev,
          data:
            fetchState.data &&
            fetchState.data.sort((a, b) => (a.cost > b.cost ? 1 : b.cost > a.cost ? -1 : 0)),
        }));
      }

      if (sortBy === "highest") {
        setFetchState((prev) => ({
          ...prev,
          data:
            fetchState.data &&
            fetchState.data.sort((a, b) => (a.cost < b.cost ? 1 : b.cost < a.cost ? -1 : 0)),
        }));
      }
    }
  };

  return (
    <StyledMain>
      <ProductControl
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        quantity={fetchState.data?.length}
        sortItems={sortItems}
      />
      <Catalog currentPage={currentPage} fetchState={fetchState} />
      <ProductControl
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        quantity={fetchState.data?.length}
        sortItems={sortItems}
      />
    </StyledMain>
  );
};

export default Main;
