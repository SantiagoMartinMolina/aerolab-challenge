import styled from "styled-components";

export const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5em;
  padding-left: 1.5em;

  p {
    font-size: 1.5em;
    color: var(--gray-100);
  }

  button {
    background-color: var(--bg-gray);
    border: none;
    border-radius: 100px;
    padding: 0.25em 1em;
    font-family: inherit;
    font-size: 1.5em;
    color: var(--gray-100);
    transition: color 200ms ease, background-color 200ms ease, transform 100ms ease;
    cursor: pointer;

    &.active {
      background-color: var(--light-blue);
      color: var(--white);
    }

    &:active {
      transform: scale(0.95);
    }

    &:hover,
    &:focus {
      color: var(--light-blue);
    }

    &:focus {
      outline: none;
      /* transform: scale(0.95);
      outline: 4px dotted var(--primary);
      outline-offset: 0.15em; */
    }
  }
`;
