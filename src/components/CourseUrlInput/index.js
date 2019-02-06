import React, { memo, useState, Fragment, useEffect } from "react";
import { Spring } from "react-spring";
import { Container, Input, GetVideoIcon } from "./styles";

import Lottie from "react-lottie";
import animationData from "../../assets/urlLoading.json";

const CourseUrlInput = memo(props => {
  const handleInputChange = e => {
    console.log(e.target.value);
    props.setUrl(e.target.value);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const { isAnimation, isLoading, handleUrl, url } = props;

  return (
    <Container>
      {isLoading ? (
        <Lottie
          options={defaultOptions}
          height={250}
          width={250}
          isStopped={false}
          isPaused={false}
        />
      ) : (
        <Fragment>
          <Spring
            config={{ delay: 400, duration: 400 }}
            from={{ width: "800px", opacity: 1, padding: "0px 20px" }}
            to={{
              width: isAnimation ? "0px" : "800px",
              opacity: isAnimation ? 0 : 1,
              padding: isAnimation ? "0px 0px" : "0 20px"
            }}
          >
            {springs => (
              <Input
                placeholder="Paste course url here ..."
                icon="link"
                name="url"
                style={springs}
                value={url}
                onChange={handleInputChange}
              />
            )}
          </Spring>
          <Spring
            from={{
              transform: "translate(0%, -50%)",
              width: "60px",
              height: "60px"
            }}
            to={{
              transform: isAnimation
                ? "translate(-270px, -50%)"
                : "translate(0%, -50%)",
              width: isAnimation ? "120px" : "60px",
              height: isAnimation ? "120px" : "60px"
            }}
          >
            {springs => (
              <GetVideoIcon onClick={handleUrl} style={springs}>
                <i className="fas fa-search" />
              </GetVideoIcon>
            )}
          </Spring>
        </Fragment>
      )}
    </Container>
  );
});

export default CourseUrlInput;
