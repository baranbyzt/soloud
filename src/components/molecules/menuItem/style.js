import styled from "styled-components";

const MenuItemContainer = styled.div`
  width: 230px;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  cursor: ${(props) => (props.isActive ? "default" : "pointer")};
  background-color: ${(props) =>
    props.isActive ? "var(--activePrimary)" : ""};
`;

export { MenuItemContainer };
