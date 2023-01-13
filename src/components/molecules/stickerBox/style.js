import styled from "styled-components";

const StickerBoxContainer = styled.div`
  width: 90px;
  height: 150px;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.color};
  border-radius: 10px;
  overflow: hidden;
`;

const StickerBoxImage = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StickerBoxBody = styled.div`
  width: 90px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--colorPrimary);
`;

export { StickerBoxContainer, StickerBoxImage, StickerBoxBody };
