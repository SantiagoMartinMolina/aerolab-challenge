import React from "react";

import BuyBlue from "~/assets/icons/BuyBlue";
import Coin from "~/assets/icons/Coin";
import img from "../../assets/AcerAspire-x2.png";

import {StyledCatalogItem} from "./styles";

const CatalogItem = () => {
  return (
    <StyledCatalogItem>
      <div className="img-container">
        <img alt="" src={img} />
      </div>
      <div className="info-container">
        <p className="category">Phones</p>
        <p className="name">Macbook pro</p>
      </div>
      <div className="icon-container">
        <BuyBlue />
      </div>
      {/* <div className="message-container">
        <p>
          You need 800 <Coin />
        </p>
      </div> */}
    </StyledCatalogItem>
  );
};

export default CatalogItem;
