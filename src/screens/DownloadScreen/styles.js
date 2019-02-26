import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  overflow: hidden;
  display: grid;
  grid-template-columns: 250px auto;
  color: #fff;
`;

export const Left = styled.div`
  display: grid;
  grid-template-rows: 50px auto 50px;
  position: relative;
  background-color: ${props => props.theme.background.dark};
`;

export const Right = styled.div`
  padding: 3rem 2rem 3rem 1rem;
  background-color: ${props => props.theme.background.darker};
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
