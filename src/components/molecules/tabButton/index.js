import React from "react";
import { TabButtonContainer } from "./style";

import Text from "../../atoms/text";
import Icon from "../../atoms/icon";

const TabButton = ({ label, icon, isActive, onClick }) => {
  return (
    <TabButtonContainer isActive={isActive} onClick={onClick}>
      {icon && <Icon data={icon} size="sm" />}
      <Text
        label={label}
        color={isActive ? "textPrimary" : "textSecondary"}
        size="sm"
      />
    </TabButtonContainer>
  );
};

export default TabButton;
