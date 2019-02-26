import React from 'react';
import * as S from './styles';
import { Button } from '../../UI';

const DownloadController = React.memo(props => {
  const {
    isStart,
    setIsStart,
    handleStart,
    handleStop,
    handleSelectAll,
    handleDeSelectAll,
    filterLessons
  } = props;

  const [isSelectedAll, setIsSeletedAll] = React.useState(true);

  const handleStartClick = () => {
    if (!isStart) {
      const cancel = handleStart();
      if (!cancel) {
        setIsStart(true);
      }
    } else {
      handleStop();
      setIsStart(false);
    }
  };

  const handleSelectClick = () => {
    if (!isSelectedAll) {
      handleSelectAll();
      setIsSeletedAll(true);
    } else {
      handleDeSelectAll();
      setIsSeletedAll(false);
    }
  };

  return (
    <S.Container>
      <S.Search>
        <i className="fas fa-search" />
        <input placeholder="Search for lessons ..." onChange={filterLessons} />
      </S.Search>
      <S.Control>
        <Button primary onClick={handleSelectClick} disabled={isStart}>
          {isSelectedAll ? 'Deselect All' : 'Select All'}
        </Button>
        <Button secondary onClick={handleStartClick}>
          {isStart ? 'Stop' : 'Start'}
        </Button>
      </S.Control>
    </S.Container>
  );
});

export default DownloadController;
