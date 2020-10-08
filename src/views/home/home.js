import React from "react";
import LogoHome from "../../assets/img/logo.png";

import Button from "../../components/button/button";

import { SectionOneContainer, SectionTwoContainer } from "./home.styled";
const Home = () => {
  return (
    <>
      <SectionOneContainer>
        <div>Header</div>
        <div className="logo-container">
          <img className="logo" src={LogoHome} alt="Logo" />
        </div>
        <div className="description-container">
          <p className="text-description">
            Las mejores raquetas para jugar{" "}
            <span className="text-emphasys">Tennis</span>
          </p>
          <Button text="ACERCA DE NOSOTROS" color="white" space="center" width="269px"/>
        </div>
      </SectionOneContainer>
      <SectionTwoContainer>
        <div className="column column-title">
          <p className="title">TENNIS</p>
        </div>
        <div className="column column-subtitle">
          <p className="subtitle">Raquetas.Accesorios. Pelotas.</p>
          <p className="description">
            Conoce nuestras raquetas y aprende a jugar Tennis como un
            profesional.
          </p>
        </div>
        <div className="column column-button">
          <Button text="HISTORIA" color="black" space="space-around" width="234px"/>
        </div>
      </SectionTwoContainer>
    </>
  );
};

export default Home;
