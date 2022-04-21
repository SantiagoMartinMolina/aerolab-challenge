import React, {FC} from "react";

import Logo from "../../assets/icons/Logo";
import UserData from "../UserData";

import {StyledNavbar} from "./styles";

const Navbar: FC = () => {
  return (
    <StyledNavbar>
      <Logo />
      <UserData />
    </StyledNavbar>
  );
};

export default Navbar;
