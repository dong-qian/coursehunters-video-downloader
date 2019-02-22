import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Search = styled.div`
  color: #a6a6a6;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    margin-right: 10px;
    font-size: 18px;
  }

  input {
    border: none;
    outline: none;
    background: none;
    font-size: 16px;
  }
`;

export { Container, Search };
