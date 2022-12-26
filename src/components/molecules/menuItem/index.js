import React from "react";
import { MenuItemContainer } from "./style";

import Text from "../../atoms/text";
import Icon from "../../atoms/icon";

const MenuItem = ({ label, icon, isActive, onClick }) => {
  return (
    <MenuItemContainer isActive={isActive} onClick={onClick}>
      {icon && (
        <Icon
          data={icon}
          size="sm"
          color={isActive ? "textWhite" : "textPrimary"}
        />
      )}
      <Text
        label={label}
        color={isActive ? "textWhite" : "textPrimary"}
        size="md"
      />
    </MenuItemContainer>
  );
};

export default MenuItem;
