import styled from "styled-components";

const MediaItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  border-bottom: 1px solid var(--colorTertiary);
  @media only screen and (min-width: 760px) {
    height: 75px;
  }
`;

const MediaItemImage = styled.div`
  position: absolute;
  top: 12px;
  left: 0px;
  height: 50px;
  width: 50px;
  @media only screen and (min-width: 760px) {
    top: 10px;
  }
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
  top: 65px;
  left: 0px;
  height: 50px;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 760px) {
    top: 12px;
    left: auto;
    right: 120px;
  }
`;

const MediaItemButtons = styled.div`
  position: absolute;
  top: 65px;
  right: 0px;
  width: 70px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: 760px) {
    top: 12px;
    right: 20px;
  }
`;

export {
  MediaItemContainer,
  MediaItemImage,
  MediaItemTitle,
  MediaItemSubTitle,
  MediaItemButtons,
  MediaItemCounts,
};
