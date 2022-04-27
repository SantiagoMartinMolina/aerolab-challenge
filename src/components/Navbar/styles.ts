import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1em 2.625em;
  z-index: 10;
  background-color: var(--bg-white);

  @media (max-width: 500px) {
    padding: 1em;
  }
`;
