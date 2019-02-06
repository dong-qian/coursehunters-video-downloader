import React, { memo } from "react";
import { css } from "styled-components/macro";

const Header = memo(() => {
  return (
    <div
      css={`
        width: 100%;
        height: 80px;
      `}
    >
      Header
    </div>
  );
});

export default Header;
