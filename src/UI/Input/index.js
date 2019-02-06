import React, { memo } from "react";
import { Container, CusInput, Icon } from "./styles";

const Input = memo(props => {
  const { icon } = props;
  const hasIcon = !!icon;
  return (
    <Container>
      {icon && <Icon className={`fas fa-${icon}`} id="link-icon" />}
      <CusInput {...props} hasIcon={hasIcon} />
    </Container>
  );
});

export default Input;
