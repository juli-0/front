import React from "react";
import { BaseButton as Button } from "./style";

// 사용 예시:
// <BaseButton size="" shape="" variant="" border="" font="" color="">
//   버튼 텍스트
// </BaseButton>
//
// Props:
// - size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "h8" | "h9" | "medium" | "bttxt" | "linktxt"
// - shape: "square" | "rounded" | "pill"
// - variant: "outline" | "ghost" | "solid" (backgroundColor prop로도 제어 가능)
// - border: "none" | "primary" | "secondary" | "gray01" | "gray02" | "gray03" | "gray04" | "gray05" | "white" | "error" | "sky"
// - font: "thin" | "extraLight" | "light" | "regular" | "medium" | "semiBold" | "bold" | "extraBold" | "black" (fontWeight prop로도 제어 가능)
// - color: "primary" | "secondary" | "white" | "gray01" | "gray02" | "gray03" | "gray04" | "gray05"
// - padding: "small" | "mediumSmall" | "smallMedium" | "medium" | "large" | "full"
// - backgroundColor: "primary" | "secondary" | "white" | "gray01" | "gray02" | "gray03" | "gray04" | "gray05"
// - fullWidth: boolean
const BaseButton = ({ size, shape, variant, border, font, color, children, ...props }) => {
  return (
    <Button 
      size={size} 
      shape={shape} 
      variant={variant} 
      border={border} 
      fontWeight={font} 
      color={color}
      {...props}
    > 
      {children}
    </Button>
  );
};

export default BaseButton;