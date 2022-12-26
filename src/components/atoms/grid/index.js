import React from "react";
import { GridContainer } from "./style";

const Grid = ({ children, ...props }) => {
  return <GridContainer {...props}>{children}</GridContainer>;
};

export default Grid;
