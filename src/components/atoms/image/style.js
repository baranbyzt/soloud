import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => (props.width ? props.width : "100%")};
  opacity: ${(props) => props.opacity};
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

export { ImageContainer };
