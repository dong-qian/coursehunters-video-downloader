import styled from "styled-components/macro";

const Container = styled.div`
  position: relative;
  width: 800px;
  text-align: center;
`;

const Input = styled.input`
  outline: none;
  border: none;
  padding: 0 20px;
  width: 100%;
  height: 80px;
  border-radius: 50px;
  font-family: "Signika", sans-serif;
  text-align: center;
  font-size: 1.2em;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0 8px 30px rgba(255, 117, 102, 0.4);
  }
`;

const GetVideoIcon = styled.button`
  position: absolute;
  top: 50%;
  right: 2%;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  backface-visibility: hidden;

  &:hover {
    transition: all 0.2s ease;
    box-shadow: 0 2px 20px rgba(255, 117, 102, 0.8);
  }

  i {
    font-size: 24px;
    color: #ff5240;
  }
`;

export { Container, Input, GetVideoIcon };
