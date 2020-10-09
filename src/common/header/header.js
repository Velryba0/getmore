import React from "react";

import { HeaderContainer } from "./header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="row menu-row">
        <p className="header-menu-text">Inicio</p>
        <p className="header-menu-text">Acerca de nosotros</p>
        <p className="header-menu-text">Historia</p>
        <p className="header-menu-text">Contacto</p>
      </div>
      <div className="header-menu-select" />
    </HeaderContainer>
  );
};

export default Header;
