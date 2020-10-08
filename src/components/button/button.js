import React from "react";
import { ButtonContainer } from "./button.styled";

const Button = ({ text, color, space, width }) => {
  return (
    <ButtonContainer color={color} space={space} width={width}>
      <button className="button-styled">{text}<div className="arrow-button"/></button>
    </ButtonContainer>
  );
};

export default Button;
