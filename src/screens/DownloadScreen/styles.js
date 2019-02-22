import styled from "styled-components/macro";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  overflow: hidden;
  display: grid;
  grid-template-columns: 250px auto;
  color: #fff;
`;

const Left = styled.div`
  padding: 30px 0;
  background-color: ${props => props.theme.background.dark};
  display: grid;
  grid-template-rows: 50px auto 50px;
`;

const Right = styled.div`
  background-color: ${props => props.theme.background.darker};
  padding: 3rem 2rem 3rem 1rem;
`;

const CourseTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export { Container, Left, Right, CourseTitle };
