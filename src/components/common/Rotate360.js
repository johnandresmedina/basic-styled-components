import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

const Rotate360 = styled.div`
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`;

export default Rotate360;
