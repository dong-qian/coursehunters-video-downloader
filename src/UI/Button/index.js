import React, { memo } from "react";
import { Container, Icon } from "./styles";

const Button = memo(props => {
  const { icon, children, width } = props;
  return (
    <Container width={width} hasIcon={!!icon} {...props}>
      <span>{children}</span>
      {icon && <Icon className={`fas fa-${icon}`} />}
    </Container>
  );
});

export default Button;
