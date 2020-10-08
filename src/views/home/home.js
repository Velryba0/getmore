import React from 'react';
import LogoHome from '../../assets/img/logo.png';

import Button from '../../components/button/button';

import { SectionOneContainer } from './home.styled';
const Home = () => {
    return(
        <>
        <SectionOneContainer>
            <div>Header</div>
            <div className="logo-container">
                <img className="logo" src={LogoHome} alt="Logo" />
            </div>
            <div className='description-container'>
                <p className="text-description">Las mejores raquetas para jugar <span className="text-emspanhasys">Tennis</span></p>
                <Button
                text="ACERCA DE NOSOTROS"/>
            </div>
        </SectionOneContainer>
        </>
    )
}

export default Home;