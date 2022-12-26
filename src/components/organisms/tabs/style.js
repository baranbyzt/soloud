import styled from "styled-components";

const TabsContainer = styled.div`
  position: relative;
  height: 33px;
`;

const TabsButtonsLayer = styled.div`
  width: fit-content;
  height: 30px;
  display: flex;
`;

const TabsAnimationLayer = styled.div`
  width: auto;
  height: 3px;
`;

const TabsAnimationSelection = styled.div`
  width: 150px;
  height: 3px;
  background-color: var(--activePrimary);
  position: absolute;
  left: ${(props) => props.left}px;
  transition: all 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;
export {
  TabsContainer,
  TabsButtonsLayer,
  TabsAnimationLayer,
  TabsAnimationSelection,
};
