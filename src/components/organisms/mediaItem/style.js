import styled from "styled-components";

const MediaItemContainer = styled.div`
  position: relative;
  box-shadow: inset 0px 0px 1px 1px var(--colorTertiary);
  width: 100%;
  height: 70px;
  margin: 10px 0;
  transition: 0.5s;
  border-radius: 10px;
`;

const MediaItemImage = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 50px;
  width: 50px;
`;

const MediaItemTitle = styled.div`
  position: absolute;
  top: 10px;
  left: 70px;
  height: 30px;
`;

const MediaItemSubTitle = styled.div`
  position: absolute;
  top: 40px;
  left: 70px;
  height: 20px;
`;

const MediaItemCounts = styled.div`
  position: absolute;
  top: 10px;
  right: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid lime;
`;

const MediaItemButtons = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 70px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export {
  MediaItemContainer,
  MediaItemImage,
  MediaItemTitle,
  MediaItemSubTitle,
  MediaItemButtons,
  MediaItemCounts,
};
