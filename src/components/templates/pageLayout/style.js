import styled from "styled-components";

const PageLayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--colorSecondary);
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    border-radius: 2px;
  }
  &::-webkit-scrollbar {
    width: 4px;
    background-color: var(--colorTertiary);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    width: 4px;
    background-color: var(--activePrimary);
  }
`;

export { PageLayoutContainer };
