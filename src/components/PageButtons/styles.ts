import styled from "styled-components";

export const StyledPageButtons = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1em;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    background-color: transparent;
    transition: transform 100ms ease;

    &:active {
      transform: scale(0.95);
    }

    &:hover,
    &:focus {
      svg {
        path {
          fill: var(--light-blue);
        }
        circle {
          stroke: var(--light-blue);
        }
      }
      outline: none;
    }
  }

  @media (max-width: 1000px) {
    button {
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  @media (max-width: 700px) {
    margin-left: 0;
  }
`;
