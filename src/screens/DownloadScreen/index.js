import React, { memo, useState } from "react";

import { Container, Left, Right, CourseTitle } from "./styles";
import { CourseVideoList, DownloadController, Sidebar } from "../../components";
import { downloadVideos } from "../../untils";

const electron = window.require("electron");
const dialog = electron.remote.dialog;
const getCurrentWindow = electron.remote.getCurrentWindow;

export default memo(props => {
  // const { url } = props;

  const url =
    "https://coursehunters.net/course/universal-react-s-next-js-polnoe-rukovodstvo";
  const lessonUrls = [
    "https://vs2.coursehunters.net/udemy-ur-nextjs/lesson2.mp4",
    "https://vs2.coursehunters.net/udemy-ur-nextjs/lesson1.mp4",
    "https://vs2.coursehunters.net/udemy-ur-nextjs/lesson3.mp4"
  ];
  const lessonNames = [
    "Lesson 2. Tools Required for this Course",
    "Lesson 1. What is Next.js What is Server-Side Rendering",
    "Lesson 3. Setting up Portfolio Project"
  ];

  const [isStart, setIsStart] = useState(false);
  const [downloadState, setDownloadState] = useState();
  const [currentDownloadingVideo, setCurrentDownloadingVideo] = useState();

  const handleStart = () => {
    setIsStart(isStart => !isStart);
    const downloadPath = dialog.showOpenDialog({
      properties: ["openDirectory"]
    });

    if (downloadPath === undefined) return;
    downloadVideos(
      downloadPath,
      url,
      lessonNames,
      lessonUrls,
      setDownloadState,
      setCurrentDownloadingVideo
    );
  };

  const handleStop = () => getCurrentWindow().reload();

  return (
    <Container>
      <Left>
        <Sidebar speed={3000} count={67} />
      </Left>
      <Right>
        <CourseTitle>GraphQl & React Full Stack Tutroial</CourseTitle>
        <DownloadController
          isStart={isStart}
          handleStart={handleStart}
          handleStop={handleStop}
        />
        <CourseVideoList
          lessonNames={lessonNames}
          lessonUrls={lessonUrls}
          downloadState={downloadState}
          currentDownloadingVideo={currentDownloadingVideo}
        />
      </Right>
    </Container>
  );
});
