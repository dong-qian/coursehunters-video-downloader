import styled, { keyframes } from "styled-components/macro";

const animate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: relative;
  width: ${props => (props.size ? `${props.size}px` : "100px")};
  height: ${props => (props.size ? `${props.size}px` : "100px")};
  border-radius: 50%;
  background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
  animation: ${animate} ${props => (props.speed ? `${props.speed}s` : "0.5s")}
    linear infinite;

  ::after {
    content: "";
    position: absolute;
    top: 10%;
    left: 10%;
    right: 10%;
    bottom: 10%;
    background-color: #240229;
    border-radius: 50%;
  }

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);

    :nth-child(1) {
      filter: blur(5px);
    }

    :nth-child(2) {
      filter: blur(10px);
    }

    :nth-child(3) {
      filter: blur(25px);
    }

    :nth-child(4) {
      filter: blur(50px);
    }
  }
`;

export { Container };
