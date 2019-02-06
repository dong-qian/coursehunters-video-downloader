import styled from "styled-components/macro";

const Container = styled.button`
  transition: all 0.2s ease;
  padding: 0.7rem;
  border: 0;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => `${props.width}px` || "100%"};
  background: ${props => props.color || props.theme.mainColor};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: #fff;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 8px 25px -8px ${props => props.color || props.theme.mainColor};
  }

  i {
    margin-left: 0.5rem;
  }
`;

const Icon = styled.i``;

export { Container, Icon };
