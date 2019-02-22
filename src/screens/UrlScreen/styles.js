import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const SchoolImage = styled.img`
  position: absolute;
  width: 300px;
  height: 300px;
  top: 5%;
  right: 5%;
`;

const StudyImage = styled.img`
  position: absolute;
  width: 300px;
  height: 300px;
  bottom: 5%;
  left: 5%;
`;

const ErrorMessage = styled.div`
  margin-top: 20px;
  color: #fb4848;
`;

const Title = styled.div`
  font-family: "Poiret One", cursive;
  font-size: 48px;
  position: absolute;
  top: 20%;
  left: 10%;
`;

const Footer = styled.div`
  font-family: "Poiret One", cursive;
  position: absolute;
  font-weight: 700;
  bottom: 5%;
  right: 5%;
`;

export { Container, SchoolImage, StudyImage, Title, Footer, ErrorMessage };
