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
    padding: 0.25em 0.5em;
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
