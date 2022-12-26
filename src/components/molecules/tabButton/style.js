import styled from "styled-components";

const TabButtonContainer = styled.div`
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  cursor: ${(props) => (props.isActive ? "default" : "pointer")};
`;

export { TabButtonContainer };
