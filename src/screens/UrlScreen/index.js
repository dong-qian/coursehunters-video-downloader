import React, { memo, useState } from "react";
import { CourseUrlInput } from "../../components";
import { getVideos } from "../../untils";
import { Container, SchoolImage, StudyImage, Title, Footer } from "./styles";
import schoolSVG from "../../assets/urlTeaching.svg";
import studyImage from "../../assets/urlStudy.svg";

export default memo(props => {
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [isAnimation, setIsAnimation] = useState(false);
  console.log(props);

  const resetAnimation = () => {
    setIsLoading(false);
    setIsAnimation(false);
  };

  const resetError = () => {
    setError("");
    setIsError(false);
  };

  const handleUrl = () => {
    resetAnimation();
    resetError();
    setIsAnimation(true);
    setTimeout(() => setIsLoading(true), 1200);
    setTimeout(async () => {
      try {
        console.log("1", url);
        const data = await getVideos(url);
        console.log("2", data);

        props.setLessonNames(data.lessonNames);
        props.setLessonUrls(data.lessonUrls);
        props.history.push("/download");
      } catch (err) {
        setError(err.message);
        setIsError(true);
        resetAnimation();
      }
    }, 1900);
  };

  return (
    <Container>
      <Title>CouseHunters Video Downloader</Title>
      <CourseUrlInput
        handleUrl={handleUrl}
        isError={isError}
        isLoading={isLoading}
        isAnimation={isAnimation}
        setUrl={setUrl}
        url={url}
      />

      {isError && <div>{error}</div>}
      <SchoolImage src={schoolSVG} />
      <StudyImage src={studyImage} />
      <Footer>version: 1.0 Beta</Footer>
    </Container>
  );
});
