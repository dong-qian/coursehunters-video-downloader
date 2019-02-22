import React, { memo } from "react";
import { Container } from "./styles";

const GGL = memo(props => {
  return (
    <Container size={props.size} speed={props.speed}>
      <span />
      <span />
      <span />
      <span />
    </Container>
  );
});

export default GGL;
