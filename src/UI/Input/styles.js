import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  justify-content: center;
  width: 100%;
`;

const CusInput = styled.input`
  position: relative;
  padding: 0.7rem;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  width: 100%;
  padding-left: ${props => (props.hasIcon ? "3rem" : "0.7rem")};

  &:focus {
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15);
    border: 1px solid ${props => props.theme.mainColor};
  }
`;

const Input = styled.input`
  border: 0;
  padding: 0 20px;
  width: 0;
  height: 0;
  border-radius: 50px;
  background-color: $danube;
  font-size: 1.6em;
  color: $white;
  font-family: "Roboto", sans-serif;
`;

const Icon = styled.i`
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  z-index: 100;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding-right: 0.5rem;
  color: rgba(0, 0, 0, 0.4);
  cursor: default;
  user-select: none;
  font-size: 1.5rem;

  ${CusInput}:focus & {
    color: ${props => props.theme.mainColor};
  }
`;

export { Container, CusInput, Icon };
