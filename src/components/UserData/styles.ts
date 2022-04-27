import styled from "styled-components";

export const StyledUserData = styled.div`
  display: flex;
  align-items: center;
  gap: 1.125em;

  .user-points {
    display: flex;
    align-items: center;
    gap: 0.5em;
    background-color: var(--bg-gray);
    border-radius: 100px;
    padding: 0.25em 0.75em;
  }

  button {
    border-radius: 100px;
    font-family: inherit;
    /* font-weight: 700; */
    background-color: var(--bg-gray);
    font-size: 1em;
    border: none;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: color 200ms ease, background-color 200ms ease, transform 100ms ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:active {
      transform: scale(0.95);
    }

    &:hover,
    &:focus {
      background-color: var(--bg-orange);
    }

    &:focus {
      outline: none;
    }

    &[disabled] {
      opacity: 0.8;
      cursor: default;
      transform: none !important;
    }
  }

  @media (max-width: 500px) {
    .user-points {
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
