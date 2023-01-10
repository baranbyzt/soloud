import styled from "styled-components";

const MapItemContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  zindex: 9;
  background-color: var(--colorPrimary);
  border-radius: 40px;
`;

const MapItemBody = styled.div`
  position: absolute;
  top: 20px;
  left: 70px;
  height: 40px;
  width: 100px;
  background-color: var(--colorPrimary);
  padding-left: 15px;
  z-index: 10;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const MapItemImage = styled.div`
  position: absolute;
  left: 3px;
  top: 3px;
  height: 74px;
  width: 74px;
  border-radius: 50px;
  overflow: hidden;
  z-index: 11;
`;

export { MapItemContainer, MapItemImage, MapItemBody };
