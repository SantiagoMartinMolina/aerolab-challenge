import styled from "styled-components";

export const StyledCatalogItem = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.15);
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 1.25em;
  position: relative;

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
    position: absolute;
    top: 1em;
    right: 1em;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 42px;
      height: 42px;
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
`;
