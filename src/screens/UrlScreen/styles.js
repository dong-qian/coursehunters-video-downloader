import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.background.dark};
`;

export const SchoolImage = styled.img`
  position: absolute;
  width: 300px;
  height: 300px;
  top: 5%;
  right: 5%;
`;

export const StudyImage = styled.img`
  position: absolute;
  width: 300px;
  height: 300px;
  bottom: 5%;
  left: 5%;
`;

export const ErrorMessage = styled.div`
  margin-top: 20px;
  color: ${props => props.theme.color.secondary};
`;

export const Title = styled.div`
  font-family: Raleway, cursive;
  font-size: 48px;
  position: absolute;
  top: 20%;
  left: 5%;
  z-index: 5;
`;

export const Footer = styled.div`
  font-family: Raleway, cursive;
  position: absolute;
  font-weight: 700;
  bottom: 5%;
  right: 5%;
`;
