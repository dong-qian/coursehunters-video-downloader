import styled, { css } from 'styled-components/macro';

export const StyledButton = styled.button`
  height: 40px;
  padding: 0px 15px;
  border: 0;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: #fff;
  transition: all 0.3s linear;
  letter-spacing: 1px;
  text-transform: uppercase;

  box-shadow: 0px 5px 10px ${props => props.theme.shadow.main};

  :hover {
    transform: translateY(-2px);
  }

  :disabled {
    cursor: not-allowed;
  }

  i {
    margin-left: 0.5rem;
  }

  ${({ primary }) =>
    primary &&
    css`
      background: ${props => props.theme.color.main};
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      background: ${props => props.theme.color.secondary};
    `}
`;
