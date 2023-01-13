import styled from "styled-components";

const MediaItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid var(--colorTertiary);
`;

const MediaItemImage = styled.div`
  position: absolute;
  top: 12px;
  left: 10px;
  height: 50px;
  width: 50px;
`;

const MediaItemTitle = styled.div`
  position: absolute;
  top: 12px;
  left: 70px;
  height: 30px;
`;

const MediaItemSubTitle = styled.div`
  position: absolute;
  top: 42px;
  left: 70px;
  height: 20px;
`;

const MediaItemCounts = styled.div`
  position: absolute;
  top: 12px;
  right: 120px;
  height: 50px;
  display: flex;
  align-items: center;
`;

const MediaItemButtons = styled.div`
  position: absolute;
  top: 12px;
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
