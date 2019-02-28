import React from "react";
import { GlowingGradientLoader } from "../../UI";
import * as S from "./styles";

const Sidebar = React.memo(props => {
  const { speed = 0, count = 0, isStart, handleStop } = props;

  const handleBackButtonClick = () => {
    handleStop();
    props.history.push("/");
  };

  return (
    <S.Container>
      <S.Band>
        <GlowingGradientLoader size={10} speed={1} />
        CVD
      </S.Band>
      <S.Summary>
        <div>
          <i className="fas fa-tachometer-alt" />
          <S.Speed start={speed}>{speed} kb/s</S.Speed>
        </div>
        <div>
          <i className="far fa-file-video" />
          {count} videos
        </div>
        <div>
          <i className="fas fa-sliders-h" />
          Settings
        </div>
      </S.Summary>
      <S.BackButton
        disabled={isStart}
        primary
        onClick={handleBackButtonClick}
        icon="long-arrow-alt-left"
        iconPosition="left"
      >
        Back
      </S.BackButton>
    </S.Container>
  );
});

export default Sidebar;
