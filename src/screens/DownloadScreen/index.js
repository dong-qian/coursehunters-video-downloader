import React from 'react';
import _ from 'lodash';

import * as S from './styles';
import { CourseVideoList, DownloadController, Sidebar } from '../../components';
import { downloader, helper } from '../../untils';

import lessonReducer from './lessonReducer';

// electron remote
const electron = window.require('electron');
const dialog = electron.remote.dialog;
const Notification = electron.remote.Notification;
const isMacOS = electron.remote.process.platform === 'darwin';

const DownloadScreen = React.memo((props) => {
  const { videos } = props;
  const [lessons, dispatch] = React.useReducer(lessonReducer(videos), videos);
  const [isStart, setIsStart] = React.useState(false);
  const [speed, setSpeed] = React.useState(0);
  const selectedLessons = _.filter(lessons, (l) => l.checked === true);

  const updateDownloadStatus = (status, name) => {
    const formattedStatus = helper.formatStatus(status);
    dispatch({
      type: 'UPDATE_STATUS',
      payload: { name, status: formattedStatus },
    });
    setSpeed(formattedStatus.speed);
  };

  const setFinishDownloadOne = (name) =>
    dispatch({
      type: 'FINISH_ONE',
      payload: { name },
    });

  const changeSelectedLessons = (name) =>
    dispatch({
      type: 'TOGGLE_ONE_CHECK',
      payload: { name },
    });

  const handleSelectAll = () =>
    dispatch({
      type: 'TOGGLE_ALL_CHECK',
      payload: { checked: true },
    });

  const handleDeSelectAll = () =>
    dispatch({
      type: 'TOGGLE_ALL_CHECK',
      payload: { checked: false },
    });

  const filterLessons = (e) =>
    dispatch({
      type: 'FILTER_LESSONS',
      payload: { name: e.target.value },
    });

  const handleStart = () => {
    const downloadPath = dialog.showOpenDialogSync({
      properties: ['openDirectory'],
    });

    console.log('downloadPath', downloadPath);
    if (downloadPath === undefined) return true;
    downloader.downloadVideos(
      props.courseName,
      downloadPath[0],
      selectedLessons,
      updateDownloadStatus,
      setFinishDownloadOne,
      finishAll
    );
    return false;
  };

  const reset = () => {
    setSpeed(0);
    setIsStart(false);
  };

  const finishAll = () => {
    const completionNotification = new Notification({
      title: `Download Completed`,
      subtitle: props.courseName,
      body: `${_.size(selectedLessons)} videos are successfully downloaded`,
    });
    completionNotification.show();
    reset();
  };

  const handleStop = () => {
    downloader.stopDownload();
    reset();
  };

  return (
    <S.Container>
      <S.Left>
        <Sidebar
          history={props.history}
          speed={speed}
          count={_.size(selectedLessons)}
          handleStop={handleStop}
          isStart={isStart}
        />
      </S.Left>
      <S.Right>
        <S.Title>{props.courseName}</S.Title>
        <DownloadController
          isStart={isStart}
          setIsStart={setIsStart}
          handleStart={handleStart}
          handleStop={handleStop}
          handleSelectAll={handleSelectAll}
          handleDeSelectAll={handleDeSelectAll}
          filterLessons={filterLessons}
        />
        <CourseVideoList
          isStart={isStart}
          lessons={lessons}
          changeSelectedLessons={changeSelectedLessons}
          isMacOS={isMacOS}
        />
      </S.Right>
    </S.Container>
  );
});

export default DownloadScreen;
