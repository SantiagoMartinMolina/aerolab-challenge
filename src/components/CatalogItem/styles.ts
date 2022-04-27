import styled from "styled-components";

import logoBlue from "../../assets/icons/buy-blue.svg";
import logoWhite from "../../assets/icons/buy-white.svg";

export const StyledCatalogItem = styled.div`
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.15);
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 1.25em;
  position: relative;

  .overlay {
    background-color: var(--bg-orange);
    padding: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 200ms ease;

    &:hover {
      opacity: 1;
    }

    .content {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1em;
      p {
        margin: auto;
        display: flex;
        align-items: center;
        gap: 0.3em;
        font-size: 2.25em;
        color: var(--white);
        text-shadow: 1px 1px 5px #000;
      }

      button {
        border-radius: 100px;
        color: var(--gray-200);
        font-family: inherit;
        background-color: var(--bg-white);
        border: none;
        font-size: 1.125em;
        padding: 0.5em 0;
        cursor: pointer;
        transition: color 200ms ease, background-color 200ms ease, transform 100ms ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;

        &:active {
          transform: scale(0.95);
        }

        &:hover,
        &:focus {
          color: var(--light-blue);
        }

        &:focus {
          outline: none;
        }
      }
    }
  }

  .img-container {
    width: 100%;
    border-bottom: 1px solid var(--gray-light);
    img {
      width: 100%;
    }
  }

  .info-container {
    .category {
      font-size: 1em;
      color: var(--gray-100);
    }
    .name {
      font-size: 1.125em;
      color: var(--gray-200);
    }
  }

  .icon-container {
    background-image: url(${logoBlue});
    background-repeat: no-repeat;
    background-position: center;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 1em;
    right: 1em;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    svg {
      width: 42px;
      height: 42px;
    }
  }

  &:hover {
    .icon-container {
      background-image: url(${logoWhite});
    }
  }

  .message-container {
    position: absolute;
    top: 1em;
    right: 1em;
    border-radius: 100px;
    background-color: var(--gray-200);
    padding: 0.2em 0.5em;
    opacity: 0.7;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5em;
      font-size: 0.875em;
      color: var(--white);
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  @media (min-width: 1190px) {
    max-width: 280px;
    max-height: 280px;
  }

  @media (max-width: 700px) {
    padding: 1em;
  }
`;
