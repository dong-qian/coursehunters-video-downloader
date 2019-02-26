import styled from 'styled-components/macro';

export const Container = styled.div`
  font-family: Raleway, 'Roboto Mono';
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

export const BackButton = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 20%;
  width: 100%;
  padding: 1rem 2rem;
  width: 80px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;

  :hover {
    border: 1px solid ${props => props.theme.color.grey};
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  }

  i {
    margin-right: 2rem;
  }
`;
