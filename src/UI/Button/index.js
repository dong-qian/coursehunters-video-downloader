import React from 'react';
import * as S from './styles';

const Button = React.memo(props => {
  const { icon, children } = props;
  return (
    <S.StyledButton hasIcon={!!icon} {...props}>
      <span>{children}</span>
      {icon && <i className={`fas fa-${icon}`} />}
    </S.StyledButton>
  );
});

export default Button;
