import React from 'react';
import * as S from './styles';

import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/urlLoading.json';

const CourseUrlInput = React.memo(props => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      props.setUrl(e.target.value);
      props.handleUrl();
    }
  };

  const { isAnimation, isLoading, handleUrl, url, setUrl } = props;

  return (
    <S.Container>
      {isLoading ? (
        <Lottie options={defaultOptions} height={250} width={250} />
      ) : (
        <>
          <S.PosedInput
            pose={isAnimation ? 'close' : 'open'}
            placeholder="Paste course url here ..."
            icon="link"
            name="url"
            value={url}
            onChange={e => setUrl(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <S.GetVideoIcon onClick={handleUrl}>
            <i className="fas fa-search" />
          </S.GetVideoIcon>
        </>
      )}
    </S.Container>
  );
});

export default CourseUrlInput;
