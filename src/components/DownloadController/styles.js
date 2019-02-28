import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin: 30px 0 20px 0;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    margin-right: 10px;
    font-size: 24px;
  }

  input {
    border: 0;
    outline: none;
    background: ${props => props.theme.color.main};
    font-size: 14px;
    color: #fff;
    width: 300px;
    padding: 10px 15px;
  }
`;

export const Control = styled.div`
  display: grid;
  grid-template-columns: 170px 100px;
  grid-column-gap: 15px;
`;
