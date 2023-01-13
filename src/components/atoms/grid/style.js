import styled from "styled-components";

const GridContainer = styled.div`
  padding: ${(props) => props.padding};
  display: ${(props) =>
    props.display
      ? props.display
      : props.direction === "row"
      ? "flex"
      : "block"};
  width: ${(props) =>
    props.padding ? "unset" : props.width ? props.width : "100%"};
  min-width: ${(props) => (props.width ? props.width : "unset")};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "unset")};
  justify-content: ${(props) =>
    props.spaceBetween
      ? "space-between"
      : props.spaceEvenly
      ? "space-evenly"
      : props.center
      ? "center"
      : "unset"};
  overflow: hidden;
  @media only screen and (min-width: 760px) {
    width: ${(props) => props.sm * 4.16}%;
  }
  @media only screen and (min-width: 1200px) {
    width: ${(props) => props.md * 4.16}%;
  }
  @media only screen and (min-width: 1400px) {
    width: ${(props) => props.lg * 4.16}%;
  }
`;

export { GridContainer };
