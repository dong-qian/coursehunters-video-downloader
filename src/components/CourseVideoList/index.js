import React from 'react';
import 'react-sweet-progress/lib/style.css';
import ScrollBar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import _ from 'lodash';
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';
import 'video-react/dist/video-react.css';
import { Checkbox } from '../../UI';

import * as S from './styles.js';

const Row = React.memo((props) => {
  const {
    isStart,
    changeSelectedLessons,
    openIndex,
    setOpenIndex,
    lesson,
    index,
  } = props;

  return (
    <div>
      <S.Video isFinished={lesson.isFinished}>
        <Checkbox
          disabled={isStart}
          checked={lesson.checked}
          onChange={() => changeSelectedLessons(lesson.name)}
        />
        <div>
          <S.Name>{lesson.name}</S.Name>
          <S.Size>
            {`${lesson.status.transferred} of ${lesson.status.total}`}
            <S.Speed>{`${lesson.status.speed} kB / s`}</S.Speed>
          </S.Size>

          <S.StyledProgress
            percent={lesson.isFinished ? 100 : `${lesson.status.percentage}`}
            status={lesson.progress}
          />
        </div>
        <div>
          <S.PlayIcon
            onClick={() => setOpenIndex(openIndex === index ? false : index)}
          >
            <i className="fas fa-video" />
          </S.PlayIcon>
        </div>
        <S.RemainingTimer>
          {lesson.isFinished ? (
            'Completed'
          ) : (
            <div>
              {lesson.status.remaining === 0 ? (
                ''
              ) : (
                <>
                  {lesson.status.remaining}
                  <S.remainingText>remaining</S.remainingText>
                </>
              )}
            </div>
          )}
        </S.RemainingTimer>
      </S.Video>
      <S.PosedWatch pose={openIndex === index ? 'open' : 'closed'}>
        {openIndex === index && (
          <Player playsInline src={lesson.url}>
            <BigPlayButton position="center" />
            <LoadingSpinner />
          </Player>
        )}
      </S.PosedWatch>
    </div>
  );
});

const CourseVideoList = React.memo((props) => {
  const { lessons, changeSelectedLessons, isStart, isMacOS } = props;
  const [openIndex, setOpenIndex] = React.useState();
  return (
    <S.Container isMacOS={isMacOS}>
      <ScrollBar>
        <div>
          {_.map(lessons, (lesson, index) => {
            return (
              <Row
                lesson={lesson}
                index={index}
                changeSelectedLessons={changeSelectedLessons}
                isStart={isStart}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
                key={index}
              />
            );
          })}
        </div>
      </ScrollBar>
    </S.Container>
  );
});

export default CourseVideoList;
