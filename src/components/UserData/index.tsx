import React from "react";

import Coin from "../../assets/icons/Coin";

import {StyledUserData} from "./styles";

const UserData = () => {
  return (
    <StyledUserData>
      <p className="user-name">John Kite</p>
      <p className="user-points">
        6000 <Coin />
      </p>
    </StyledUserData>
  );
};

export default UserData;
