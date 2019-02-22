import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-height: 500px;
  overflow: auto;
`;

const Video = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 100px auto 100px;
  padding: 20px 30px;
  background: #fff;
  margin: 10px 0;
  transition: all 0.3s ease;
  border-radius: 5px;
  box-shadow: 0 0.25rem 0.125rem 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
`;

const Left = styled.div``;
const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Preview = styled.video`
  border-radius: 8px;
  box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.2);
`;

const Name = styled.div`
  font-family: Roboto;
  font-weight: bold;
`;

const Size = styled.div`
  font-size: 11px;
  min-width: 300px;
  color: #3f3f3f;
  margin-top: 8px;
  span {
    font-size: 11px;
    margin-left: 20px;
  }
`;

const Speed = styled.span``;

const WatchIcon = styled.div`
  i {
    font-size: 32px;
    color: #f55;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      font-size: 38px;
    }
  }
`;

const RemainingTime = styled.div`
  margin-top: 10px;
`;

const ProgressBar = styled.div`
  margin-top: 5px;
  font-size: 18px;
`;

export {
  Container,
  Video,
  Left,
  Middle,
  Right,
  Preview,
  Name,
  Size,
  Speed,
  WatchIcon,
  RemainingTime,
  ProgressBar
};
