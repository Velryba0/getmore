import styled from "styled-components";

export const HeaderContainer = styled("div")`
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    width: 579px;
    height: 37px;
    margin: 44px 0 0 173px;
    position: absolute;

    .menu-row {
      width: 579px;
      height: 37px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-menu-text {
        font-family: "Helvetica Neue";
        font-size: 16px;
        letter-spacing: 1.4px;
        color: white;
      }
    }

    .header-menu-select {
      width: 17px;
      height: 2px;
      background-color: white;
    }
  }

  @media (max-width: 768px) {
    width: 100vw;
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 35px;
    right: 35px;
    justify-content: flex-end;
    .menu-row {
        width: 100px;;
      .header-menu-text {
        visibility: hidden;
      }
    }
    .header-menu-select {
      width: 33px;
      height: 4px;
      border-radius: 6px;
      background-color: white;
      position: absolute;
      &::after {
        content: "";
        position: absolute;
        width: 33px;
        height: 4px;
        border-radius: 6px;
        background-color: white;
        transform: translateY(9px);
        -moz-transform: translateY(9px);
        -webkit-transform: translateY(9px);
      }

      &::before {
        content: "";
        position: absolute;
        width: 33px;
        height: 4px;
        border-radius: 6px;
        background-color: white;
        transform: translateY(-9px);
        -moz-transform: translateY(-9px);
        -webkit-transform: translateY(-9px);
      }
    }
  }
`;
