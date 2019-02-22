import React, { memo } from "react";
import { Link } from "react-router-dom";

import { GlowingGradientLoader } from "../../UI";
import { Band, Summary, BackController } from "./styles";

const Sidebar = memo(props => {
  const { speed = 0, count = 0 } = props;

  return (
    <>
      <Band>
        <GlowingGradientLoader size={10} speed={1} />
        CVD
      </Band>
      <Summary>
        <div>
          <i class="fas fa-tachometer-alt" />
          {speed} kb/s
        </div>
        <div>
          <i class="far fa-file-video" />
          {count} videos
        </div>
        <div>
          <i class="fas fa-sliders-h" />
          Settings
        </div>
      </Summary>
      <Link to="/">
        <BackController>
          <i class="fas fa-long-arrow-alt-left" />
          Back
        </BackController>
      </Link>
    </>
  );
});

export default Sidebar;
