import styled from "styled-components/macro";

const Band = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;

  div {
    margin: 0 2.2rem;
    border-radius: 50%;
    background-color: ${props => props.theme.color.purple};
  }
`;

const Summary = styled.div`
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

const BackController = styled.div`
  padding: 1rem 2rem;
  margin: auto;
  width: 80px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: grid;
  grid-template-columns: 40px auto;
  place-items: center;

  :hover {
    border: 1px solid ${props => props.theme.color.grey};
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  }

  i {
    margin-right: 2rem;
  }
`;

export { Band, Summary, BackController };
