import styled from 'styled-components';
import { Progress } from 'react-sweet-progress';
import posed from 'react-pose';

export const Container = styled.div`
  width: 100%;
  height: 700px;
  font-size: 13px;
`;

export const Video = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 30px 100px auto 50px 80px;
  padding: 10px 20px;
  margin: 10px 0;
  box-shadow: 0 8px 10px 0 ${props => props.theme.shadow.main};
  background: ${props =>
    props.isFinished
      ? props.theme.background.dark
      : props.theme.background.light};
  place-items: center start;
`;

export const Preview = styled.video`
  box-shadow: 0 10px 50px 0 ${props => props.theme.shadow.main};
`;

export const Name = styled.div`
  font-weight: 500;
  width: 500px;
`;

export const Size = styled.div`
  min-width: 300px;
  margin-top: 8px;
  span {
    margin-left: 20px;
  }
`;

export const Speed = styled.span``;

export const PlayIcon = styled.div`
  transition: all 0.3s ease;
  i {
    font-size: 32px;
    color: ${props => props.theme.color.secondary};
    cursor: pointer;
  }

  :hover {
    transform: scale(1.1);
  }
`;

export const RemainingTimer = styled.div`
  display: grid;
  place-items: center;
`;

export const remainingText = styled.div`
  margin-top: 10px;
  font-size: 11px;
`;

export const ProgressBar = styled.div`
  margin-top: 5px;
  font-size: 18px;
`;

export const StyledProgress = styled(Progress)`
  .react-sweet-progress-symbol {
    color: #fff;
  }
`;

export const Watch = styled.div``;

export const PosedWatch = posed(Watch)({
  closed: { height: 0 },
  open: { height: 'auto' }
});
