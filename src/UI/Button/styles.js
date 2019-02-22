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
  height: 80px;
  background: ${props => props.color || props.theme.mainColor};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: #fff;
  box-sizing: border-box;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

  &:hover {
    box-shadow: 0 8px 25px -8px ${props => props.color || props.theme.mainColor};
  }

  i {
    margin-left: 0.5rem;
  }
`;

const Icon = styled.i``;

export { Container, Icon };
