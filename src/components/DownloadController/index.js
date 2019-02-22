import React, { memo } from "react";
import { Container, Search } from "./styles";
import { Button } from "../../UI";

const DownloadController = memo(props => {
  const { isStart, handleStart, handleStop } = props;

  const handleClick = () => {
    if (!isStart) {
      handleStart();
    } else {
      handleStop();
    }
  };
  return (
    <Container>
      <Search>
        <i className="fas fa-search" />
        <input placeholder="Search for lessons" />
      </Search>
      <Button width={120} color="#ff5240" onClick={handleClick}>
        {isStart ? "Stop" : "Start"}
      </Button>
    </Container>
  );
});

export default DownloadController;
