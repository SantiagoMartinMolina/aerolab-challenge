import styled from "styled-components";

export const StyledProductControl = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1.5em;
  border-bottom: 1px solid var(--gray-light);
  @media (max-width: 1000px) {
    padding-bottom: 1em;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1em;
  }
`;
