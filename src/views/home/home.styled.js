import styled from "styled-components";
import backgroundImageSectionOne from "../../assets/img/group.png";
import bgImageSectionFour from "../../assets/img/bg-section-four.png";

export const SectionOneContainer = styled("section")`
  @media (min-width: 376px) {
    display: flex;
    width: 100vw;
    height: 100vh;
    background: url(${backgroundImageSectionOne}) 100%;
    background-size: cover;

    .logo-container {
      display: flex;
      justify-content: center;
      position: absolute;
      width: 105px;
      height: 785px;
      left: 0;
      border-right: 1px solid white;

      .logo {
        margin-top: 25px;
        width: 37px;
        height: 37px;
      }
    }

    .description-container {
      display: flex;
      flex-direction: column;
      width: 709px;
      justify-content: center;
      margin-left: 173px;
      .text-description {
        margin-bottom: 33px;
        font-family: "Helvetica Neue";
        font-size: 53px;
        color: white;

        .text-emphasis {
          font-family: "Helvetica Neue Bold";
          color: #cbe346;
        }
      }
    }
  }

  @media (max-width: 376px) {
    display: flex;
    width: 100vw;
    height: 100vh;
    background: url(${backgroundImageSectionOne}) 100%;
    background-size: cover;

    .logo-container {
      display: flex;
      justify-content: center;
      position: absolute;
      width: 54px;
      height: 785px;
      left: 0;
      border-right: 1px solid white;

      .logo {
        margin-top: 25px;
        width: 30px;
        height: 30px;
      }
    }

    .description-container {
      display: flex;
      flex-direction: column;
      width: 210px;
      justify-content: center;
      margin-left: 90px;
      .text-description {
        margin-bottom: 33px;
        font-family: "Helvetica Neue";
        font-size: 45px;
        color: white;

        .text-emphasis {
          font-family: "Helvetica Neue Bold";
          color: #cbe346;
        }
      }
    }
  }
`;

export const SectionTwoContainer = styled("section")`
  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 392px;
    background-color: #f3f4f8;

    .column-title {
      width: 174px;
      height: 180px;
      margin-right: 51px;

      .title {
        width: 100%;
        text-align: right;
        color: #cbe346;
        font-size: 15px;
        letter-spacing: 1.87px;
        line-height: 30px;
        font-family: "Helvetica Neue Bold";
      }
    }

    .column-subtitle {
      width: 555px;
      height: 210px;
      .subtitle {
        word-break: break-word;
        width: 100%;
        height: 151px;
        font-size: 50px;
        font-weight: 700;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.14;
        letter-spacing: -0.06px;
        color: #1e2335;
        font-family: "Helvetica Neue";
      }

      .description {
        width: 393px;
        height: 87px;
        font-size: 18px;
        line-height: 32px;
        letter-spacing: 0.51px;
        color: #787878;
      }
    }

    .column-button {
      width: 234px;
      height: 200px;
      display: flex;
      justify-content: flex-end;
    }
  }

  @media (max-width: 768px) and (min-width: 376px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 366px;
    background-color: #f3f4f8;

    .column-title {
      width: 174px;
      height: 30px;
      margin-top: 27px;
      position: relative;
      right: 111px;

      .title {
        width: 100%;
        text-align: left;
        color: #cbe346;
        font-size: 15px;
        letter-spacing: 1.87px;
        line-height: 30px;
        font-family: "Helvetica Neue Bold";
      }
    }

    .column-subtitle {
      width: 400px;
      height: 180px;
      .subtitle {
        word-break: break-word;
        width: 100%;
        height: 151px;
        font-size: 36px;
        font-weight: 700;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.14;
        letter-spacing: -0.06px;
        color: #1e2335;
        font-family: "Helvetica Neue";
      }

      .description {
        width: 393px;
        height: 87px;
        font-size: 17px;
        line-height: 32px;
        letter-spacing: 0.51px;
        color: #787878;
      }
    }

    .column-button {
      width: 234px;
      height: 60px;
      display: flex;
      margin-top: 27px;
      position: relative;
      left: 100px;
    }
  }

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 366px;
    background-color: #f3f4f8;

    .column-title {
      width: 174px;
      height: 30px;
      margin-top: 27px;
      margin-left: 66px; 
      position: relative;
      right: 106px;

      .title {
        width: 100%;
        text-align: left;
        color: #cbe346;
        font-size: 15px;
        letter-spacing: 1.87px;
        line-height: 30px;
        font-family: "Helvetica Neue Bold";
      }
    }

    .column-subtitle {
      width: 85vw;
      height: 180px;
      .subtitle {
        word-break: break-word;
        width: 100%;
        height: 100px;
        font-size: 30px;
        font-weight: 700;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.14;
        letter-spacing: -0.06px;
        color: #1e2335;
        font-family: "Helvetica Neue";
      }

      .description {
        width: 80vw;
        height: 87px;
        font-size: 15px;
        line-height: 32px;
        letter-spacing: 0.51px;
        color: #787878;
      }
    }

    .column-button {
      width: 200px;
      height: 60px;
      display: flex;
      margin-top: 27px;
      position: relative;
      left: 80px;
    }
  }
`;

export const SectionThreeContainer = styled("section")`
  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 468px;

    .controls-setion {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 900px;
  }
`;

export const SectionFourContainer = styled("section")`
  width: 100vw;
  height: 586px;
  background: url(${bgImageSectionFour});
`;
