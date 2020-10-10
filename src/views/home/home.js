import React from 'react';
import LogoHome from '../../assets/img/logo.png';

import Carousel from '../../components/carousel/carousel';
import Button from '../../common/button/button';

import { SectionOneContainer, SectionTwoContainer, SectionThreeContainer, SectionFourContainer } from './home.styled';
const Home = () => {
  return (
    <>
      <SectionOneContainer>
        <div className="logo-container">
          <img className="logo" src={LogoHome} alt="Logo" />
        </div>
        <div className="description-container">
          <p className="text-description">
            Las mejores raquetas para jugar
            <span className="text-emphasis"> Tennis</span>
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
      <SectionThreeContainer>
        <Carousel/>
      </SectionThreeContainer>
      <SectionFourContainer />
    </>
  );
};

export default Home;
