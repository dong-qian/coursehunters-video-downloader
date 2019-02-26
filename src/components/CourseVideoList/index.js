import React from 'react';
import 'react-sweet-progress/lib/style.css';
import ScrollBar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import _ from 'lodash';
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';
import 'video-react/dist/video-react.css';
import { Checkbox } from '../../UI';

import * as S from './styles.js';

const CourseVideoList = React.memo(props => {
  const { lessons, changeSelectedLessons, isStart } = props;
  const [openIndex, setOpenIndex] = React.useState();

  return (
    <S.Container>
      <ScrollBar component="div">
        {lessons &&
          _.map(lessons, (l, index) => {
            return (
              <div key={index}>
                <S.Video isFinished={l.isFinished}>
                  <Checkbox
                    disabled={isStart}
                    checked={l.checked}
                    onChange={() => changeSelectedLessons(l.name)}
                  />
                  <div>
                    <S.Preview width="80" height="auto">
                      <source src={l.url} type="video/mp4" />
                    </S.Preview>
                  </div>
                  <div>
                    <S.Name>{l.name}</S.Name>
                    <S.Size>
                      {`${l.status.transferred} of ${l.status.total}`}
                      <S.Speed>{`${l.status.speed} kB / s`}</S.Speed>
                    </S.Size>

                    <S.StyledProgress
                      percent={l.isFinished ? 100 : `${l.status.percentage}`}
                      status={l.progress}
                    />
                  </div>
                  <div>
                    <S.PlayIcon
                      onClick={() =>
                        setOpenIndex(openIndex === index ? false : index)
                      }
                    >
                      <i className="fas fa-video" />
                    </S.PlayIcon>
                  </div>
                  <S.RemainingTimer>
                    {l.status.remaining === 0 ? (
                      ''
                    ) : (
                      <div>
                        {l.isFinished ? (
                          'Finished'
                        ) : (
                          <>
                            {l.status.remaining}
                            <S.remainingText>remaining</S.remainingText>
                          </>
                        )}
                      </div>
                    )}
                  </S.RemainingTimer>
                </S.Video>

                <S.PosedWatch pose={openIndex === index ? 'open' : 'closed'}>
                  {openIndex === index && (
                    <Player playsInline src={l.url}>
                      <BigPlayButton position="center" />
                      <LoadingSpinner />
                    </Player>
                  )}
                </S.PosedWatch>
              </div>
            );
          })}
      </ScrollBar>
    </S.Container>
  );
});

export default CourseVideoList;
