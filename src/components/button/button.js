import React from "react";
import { ButtonContainer } from "./button.styled";

const Button = ({ text }) => {
  return (
    <ButtonContainer>
      <button className="button-styled">{text}<div className="arrow-button"/></button>
    </ButtonContainer>
  );
};

export default Button;
