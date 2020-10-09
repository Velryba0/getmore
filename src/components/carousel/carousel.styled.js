import styled, { css } from "styled-components";

import bgImgCarouselControls from "../../assets/img/carousel-controls.png";

export const CarouselContainer = styled("div")`
  width: 100vw;
  height: 468px;
  display: flex;
  flex-direction: row;

  .controls-section {
    width: 100%;
    height: 100%;
    background: url(${bgImgCarouselControls}) no-repeat;
    display: flex;
    flex-direction: column;

    .controls-title {
      width: 259px;
      height: 151px;
      margin: 38px 71px 0 200px;
      font-size: 50px;
      line-height: 64px;
      letter-spacing: 1px;
      word-break: normal;
      color: white;
      font-family: "Helvetica Neue";

      .controls-title-emphasis {
        font-family: "Helvetica Neue Bold";
        letter-spacing: 1px;
      }
    }

    .controls-description {
      width: 303px;
      height: 122px;
      font-size: 18px;
      line-height: 1.67;
      letter-spacing: 0.51px;
      word-break: normal;
      color: white;
      margin-left: 200px;
    }
  }
`;

export const ControlDotsContainer = styled("div")`
  display: flex;
  flex-direction: row;
  width: 104px;
  height: 8px;
  justify-content: space-between;
  margin-left: 200px;
  .control-dots-off {
    width: 8px;
    height: 8px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-color: #d8d8d8;
    cursor: pointer;
  }

  .control-dots-on {
    width: 8px;
    height: 8px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-color: #cbe346;
    cursor: pointer;
  }
`;

export const ControlArrowContainer = styled("div")`
  display: flex;
  flex-direction: row;
  .control-arrow-left-off {
    width: 54px;
    height: 54px;
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 35.2px 0 0 190px;
    transition: all 2s ease-in-out;
    &::after {
      content: "";
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 9px solid white;
    }
  }

  .control-arrow-left-on {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background-color: #cbe346;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 35.2px 0 0 190px;
    filter: drop-shadow(0 6px 6px rgba(0, 0, 0, 0.7));
    cursor: pointer;  
    transition: all 2s ease-in-out;
    &::after {
      content: "";
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 9px solid white;
    }
  }

  .control-arrow-right-on {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background-color: #cbe346;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 35.2px 0 0 19px;
    filter: drop-shadow(0 6px 6px rgba(0, 0, 0, 0.7));
    cursor: pointer;
    transition: all 2s ease-in-out;
    &::after {
      content: "";
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 9px solid white;
    }
  }

  .control-arrow-right-off {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: none;
    border: 1px solid white;
    margin: 35.2px 0 0 19px;
    transition: all 2s ease-in-out;
    &::after {
      content: "";
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 9px solid white;
    }
  }
`;

export const ImageCarouselContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  .image-card {
    width: 288px;
    height: 344px;
    margin-left: 53px;
    position: relative;
    transform: ${({ translatePosX }) => css`
        translate(${translatePosX}px);
    `};

    .carousel-image {
      width: 288px;
      height: 344px;
      border-radius: 15px;
    }

    .circle-image {
      position: absolute;
      top: 11px;
      left: 17px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 39px;
      height: 39px;
      border-radius: 50%;
      background-color: #cbe346;
      text-align: center;
      color: white;
      /* transform: translate(50px, -150px) */
    }
  }
`;
