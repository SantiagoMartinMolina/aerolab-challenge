import styled from "styled-components";

export const StyledCatalog = styled.section`
  margin: 2.625em 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5em;

  @media (max-width: 700px) {
    margin: 1em 0;
  }
`;

export const StyledContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 5em;
  min-height: 80vh;
  div {
    width: 10em;
    height: 10em;
    border: 7px solid var(--gray-light);
    border-right-color: var(--light-blue);
  }
`;
