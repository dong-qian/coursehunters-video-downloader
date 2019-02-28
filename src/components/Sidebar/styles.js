import styled from "styled-components/macro";
import { Button } from "../../UI";

export const Container = styled.div`
  font-family: Raleway, "Roboto Mono";
`;
export const Band = styled.div`
  font-size: 1.5rem;

  font-weight: bold;
  display: flex;
  align-items: center;
  margin-top: 2rem;

  div {
    margin: 0 2.2rem;
    border-radius: 50%;
    background-color: ${props => props.theme.color.purple};
  }
`;

export const Summary = styled.div`
  margin-top: 5rem;
  font-size: 1rem;
  font-weight: bold;

  div {
    padding-left: 2rem;
    margin: 4rem 0;
    width: 180px;

    i {
      margin-right: 2rem;
      font-size: 1rem;
    }
  }
`;

export const Speed = styled.span`
  color: ${props => props.start !== 0 && props.theme.color.highlighter};
`;

export const BackButton = styled(Button)`
  position: absolute;
  bottom: 2rem;
  left: 15%;
  /* width: 100%; */
  width: 170px;

  :hover {
    border: 1px solid ${props => props.theme.color.grey};
  }

  i {
    margin-right: 2rem;
  }
`;
