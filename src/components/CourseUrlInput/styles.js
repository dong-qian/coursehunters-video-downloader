import styled from 'styled-components/macro';
import posed from 'react-pose';

export const Container = styled.div`
  position: relative;
  text-align: center;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 800px;
  height: 80px;
  border-radius: 50px;
  font-family: 'Signika', sans-serif;
  text-align: center;
  font-size: 1.2em;
  transition: all 0.5s ease;

  background: ${props => props.theme.background.light};
  box-shadow: 0 2px 20px ${props => props.theme.shadow.main};
  color: #fff;
  &:hover {
    box-shadow: 0 8px 30px ${props => props.theme.shadow.secondary};
  }
`;

export const PosedInput = posed(Input)({
  open: {
    width: '800px',
    opacity: 1
  },
  close: {
    width: 60,
    opacity: 0,
    transition: { width: { duration: 400 } }
  }
});

export const GetVideoIcon = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border: 0;
  border-radius: 50%;
  cursor: pointer;

  backface-visibility: hidden;
  outline: none;
  transition: all 0.2s ease;

  i {
    font-size: 28px;
    color: ${props => props.theme.color.secondary};
  }
`;
