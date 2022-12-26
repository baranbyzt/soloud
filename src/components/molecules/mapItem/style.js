import styled from "styled-components";

const MapItemContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  zindex: 9999;
`;

const MapItemImage = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  border: 1px solid red;
  overflow: hidden;
`;

const MapItemTitle = styled.div`
  position: absolute;
  top: 10px;
  left: 70px;
  height: 30px;
`;

const MapItemSubTitle = styled.div`
  position: absolute;
  top: 40px;
  left: 70px;
  height: 20px;
`;

export { MapItemContainer, MapItemImage, MapItemTitle, MapItemSubTitle };
