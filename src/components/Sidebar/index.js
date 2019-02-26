import React from 'react';
import { Link } from 'react-router-dom';

import { GlowingGradientLoader } from '../../UI';
import * as S from './styles';

const Sidebar = React.memo(props => {
  const { speed = 0, count = 0 } = props;

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
      <Link to="/">
        <S.BackButton>
          <i className="fas fa-long-arrow-alt-left" />
          Back
        </S.BackButton>
      </Link>
    </S.Container>
  );
});

export default Sidebar;
