import styled from "styled-components";

export const StyledProductCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid var(--gray-light);
  padding: 0.5em 1.5em 0.5em 0;
  p {
    font-size: 1.5em;
    color: var(--gray-200);
  }

  @media (max-width: 1000px) {
    p {
      font-size: 1em;
    }
  }

  @media (max-width: 700px) {
    border-right: none;
    padding: 0;
  }
`;
