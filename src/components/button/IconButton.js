import React from "react";
import styled, { css } from "styled-components";
import BaseButton from "./BaseButton";
import Icon from "../icon/Icon";

const ButtonContent = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  ${({ iconPosition }) =>
    iconPosition === "right" &&
    css`
      flex-direction: row-reverse;
    `}
`;

const IconButton = ({
  icon,
  iconName,
  iconPosition = "left", // left, right
  iconSize,
  iconColor,
  backgroundColor,
  children,
  ...props
}) => {
  // 아이콘만 있는 경우
  if (!children && (icon || iconName)) {
    return (
      <BaseButton {...props} backgroundColor={backgroundColor}>
        <Icon name={iconName} src={icon} size={iconSize} color={iconColor} />
      </BaseButton>
    );
  }

  // 텍스트와 아이콘이 함께 있는 경우
  if (children && (icon || iconName)) {
    return (
      <BaseButton {...props} backgroundColor={backgroundColor}>
        <ButtonContent iconPosition={iconPosition}>
          <Icon name={iconName} src={icon} size={iconSize} color={iconColor} />
          <span>{children}</span>
        </ButtonContent>
      </BaseButton>
    );
  }

  // 아이콘이 없으면 기본 BaseButton 사용
  return <BaseButton {...props} backgroundColor={backgroundColor}>{children}</BaseButton>;
};

export default IconButton;
