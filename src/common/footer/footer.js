import React from "react";

import facebookImg from "../../assets/img/facebook.png";
import linkedinImg from "../../assets/img/in.png";
import instagramImg from "../../assets/img/instagram.png";
import twitterImg from "../../assets/img/twitter.png";
import vimeoImg from "../../assets/img/vimeo.png";
import logo from "../../assets/img/logo.png";

import { FooterContainer } from "./footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="column footer-colum-1">
        <div className="row footer-row-1">
          <p className="link-text-footer">
            <span className="link-text-footer-emphasis">Inicio</span>
          </p>
          <p className="link-text-footer">Acerca de nosotros</p>
          <p className="link-text-footer">Historia</p>
          <p className="link-text-footer">Contacto</p>
        </div>
        <div className="row footer-row-2">
          <img
            className="social-media-icons"
            src={linkedinImg}
            alt="linkedin"
          />
          <img className="social-media-icons" src={vimeoImg} alt="vimeo" />
          <img
            className="social-media-icons"
            src={instagramImg}
            alt="instagram"
          />
          <img className="social-media-icons" src={twitterImg} alt="twitter" />
          <img
            className="social-media-icons"
            src={facebookImg}
            alt="facebook"
          />
        </div>
      </div>
      <div className="column footer-column-2">
        <img className="logo-footer" src={logo} alt="logo" />
      </div>
    </FooterContainer>
  );
};

export default Footer;
