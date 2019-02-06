import React, { memo, Fragment } from "react";
import { Link } from "react-router-dom";

import { Header, CourseVideoList, ControlHeader } from "../../components";

export default memo(props => {
  return (
    <Fragment>
      <Header />
      <ControlHeader />
      <CourseVideoList
        lessonNames={props.lessonNames}
        lessonUrls={props.lessonUrls}
      />
      <Link to="/">back</Link>
    </Fragment>
  );
});
