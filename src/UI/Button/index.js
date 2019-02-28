import React from "react";
import * as S from "./styles";

const Button = React.memo(props => {
  const { icon, iconPosition = "right", children } = props;
  return (
    <S.StyledButton hasIcon={!!icon} {...props}>
      {icon && iconPosition === "left" && <i className={`fas fa-${icon}`} />}
      <span>{children}</span>
      {icon && iconPosition === "right" && <i className={`fas fa-${icon}`} />}
    </S.StyledButton>
  );
});

export default Button;
