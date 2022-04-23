import styled from "styled-components";

import header from "../../assets/header.png";

export const StyledHeader = styled.header`
  margin-top: 74px;
  background-image: url(${header});
  background-size: cover;
  background-position: top right;
  background-repeat: no-repeat;
  height: 450px;
  display: flex;
  align-items: flex-end;

  h1 {
    font-size: 4em;
    font-weight: 700;
    color: var(--white);
    margin: 0 0 0.75em 2.0625em;
    text-shadow: 1px 1px 7px #555;
  }

  @media (max-width: 700px) {
    h1 {
      margin: 0 auto 0.25em auto;
      font-size: 3em;
    }
  }
`;
