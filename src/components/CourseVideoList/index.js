import React, { memo, useState, useEffect } from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

import { helpers } from "../../untils";

import {
  Container,
  Video,
  Preview,
  Left,
  Middle,
  Right,
  Name,
  Size,
  Speed,
  WatchIcon,
  RemainingTime,
  Percentage,
  ProgressBar
} from "./styles.js";

const CourseVideoList = memo(props => {
  const {
    lessonNames,
    lessonUrls,
    downloadState,
    currentDownloadingVideo
  } = props;

  const initlizeVideoStatus = () => {
    let videosStatus = {};
    lessonNames.forEach(l => {
      videosStatus[l] = {
        transferred: 0,
        total: 0,
        speed: 0,
        percentage: 0,
        remaining: 0,
        status: "active",
        isFinished: false
      };
    });
    return videosStatus;
  };

  const [videosStatusList, setVideosStatusList] = useState(initlizeVideoStatus);

  const updateVideosStatusList = () => {
    const isFinished =
      downloadState.size.total === downloadState.size.transferred &&
      downloadState.size.transferred > 0;

    setVideosStatusList({
      ...videosStatusList,
      [currentDownloadingVideo]: {
        transferred: helpers.formatBytes(downloadState.size.transferred),
        total: helpers.formatBytes(downloadState.size.total),
        speed: Math.floor(downloadState.speed / 1024),
        percentage: isFinished ? 100 : Math.floor(downloadState.percent * 100),
        remaining: isFinished
          ? "Done"
          : `${helpers.formatRemainingTime(
              downloadState.time.remaining
            )} remaining`,
        status: isFinished ? "success" : "active"
      }
    });
  };

  useEffect(() => {
    if (downloadState) {
      updateVideosStatusList();
    }
  });

  console.log("finsihList", videosStatusList);

  return (
    <Container>
      {lessonNames.map((name, index) => {
        const video = videosStatusList[name];
        return (
          <Video key={index}>
            <Left>
              <Preview width="100" height="auto">
                <source src={lessonUrls[index]} type="video/mp4" />
              </Preview>
            </Left>

            <Middle>
              <Name>{name}</Name>

              <Size>
                {`${video.transferred} of ${video.total}`}
                <Speed>{`${video.speed} kb/s`}</Speed>
              </Size>

              <ProgressBar>
                <Progress
                  percent={`${video.percentage}`}
                  status={video.status}
                />
              </ProgressBar>
            </Middle>

            <Right>
              <WatchIcon>
                <i className="fas fa-video" />
              </WatchIcon>
              <RemainingTime>{video.remaining}</RemainingTime>
            </Right>
          </Video>
        );
      })}
    </Container>
  );
});

export default CourseVideoList;
