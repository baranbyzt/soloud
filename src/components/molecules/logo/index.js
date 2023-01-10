import React from "react";
import { LogoContainer } from "./style";
import Image from "../../atoms/image";

const Logo = ({ size }) => {
  return (
    <LogoContainer size={size}>
      <Image
        width="100px"
        height="100px"
        type="png"
        imageName="logo"
        size="cover"
      />
    </LogoContainer>
  );
};

export default Logo;
