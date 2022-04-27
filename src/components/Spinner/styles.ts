import styled, {keyframes} from "styled-components";

const rotate = keyframes`
0% {
    -webkit-transform: rotateZ(0);
    -ms-transform: rotateZ(0);
    transform: rotateZ(0);
}

100% {
    -webkit-transform: rotateZ(360deg);
    -ms-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
}
`;

export const StyledSpinner = styled.div`
  width: 1.3em;
  height: 1.3em;
  border: 3px solid var(--gray-light);
  border-right-color: var(--light-blue);
  border-radius: 50%;
  animation: ${rotate} 0.75s linear infinite;
`;
