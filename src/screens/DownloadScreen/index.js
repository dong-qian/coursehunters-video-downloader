import React from "react";
import _ from "lodash";

import * as S from "./styles";
import { CourseVideoList, DownloadController, Sidebar } from "../../components";
import { downloader, helper } from "../../untils";

import lessonRedcuer from "./lessonReducer";

// electron remote
const electron = window.require("electron");
const dialog = electron.remote.dialog;

const DownloadScreen = React.memo(props => {
  const { url, videos } = props;
  const [lessons, dispatch] = React.useReducer(lessonRedcuer(videos), videos);
  const [isStart, setIsStart] = React.useState(false);
  const [speed, setSpeed] = React.useState(0);
  const selectedLessons = React.useMemo(
    () => _.filter(lessons, l => l.checked === true),
    [lessons]
  );

  const courseName = React.useMemo(
    () => _.startCase(_.replace(_.last(url.split("/")), "-", " ")),
    [url]
  );

  const updateDownloadStatus = (status, name) => {
    const formatedStatus = helper.formatStatus(status);
    dispatch({
      type: "UPDATE_STATUS",
      payload: { name, status: formatedStatus }
    });
    setSpeed(formatedStatus.speed);
  };

  const setFinishDownloadOne = name =>
    dispatch({
      type: "FINISH_ONE",
      payload: { name }
    });

  const changeSelectedLessons = name =>
    dispatch({
      type: "TOGGLE_ONE_CHECK",
      payload: { name }
    });

  const handleSelectAll = () =>
    dispatch({
      type: "TOGGLE_ALL_CHECK",
      payload: { checked: true }
    });

  const handleDeSelectAll = () =>
    dispatch({
      type: "TOGGLE_ALL_CHECK",
      payload: { checked: false }
    });

  const filterLessons = e =>
    dispatch({
      type: "FILTER_LESSONS",
      payload: { name: e.target.value }
    });

  const handleStart = () => {
    const downloadPath = dialog.showOpenDialog({
      properties: ["openDirectory"]
    });

    if (downloadPath === undefined) return true;
    downloader.downloadVideos(
      downloadPath,
      url,
      selectedLessons,
      updateDownloadStatus,
      setFinishDownloadOne,
      finishAll
    );
    return false;
  };

  const finishAll = () => {
    setIsStart(false);
  };

  const reset = () => {
    dispatch({
      type: "RESET",
      payload: { videos }
    });
    setSpeed(0);
    setIsStart(false);
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
        />
      </S.Left>
      <S.Right>
        <S.Title>{courseName}</S.Title>
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
          selectedLessons={selectedLessons}
          changeSelectedLessons={changeSelectedLessons}
        />
      </S.Right>
    </S.Container>
  );
});

export default DownloadScreen;
