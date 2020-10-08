import styled from "styled-components";
import backgroundImageSectionOne from "../../assets/img/group.png";

export const SectionOneContainer = styled("section")`
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

      .text-emphasys {
        font-family: "Helvetica Neue Bold";
        color: #cbe346;
      }
    }
  }
`;

export const SectionTwoContainer = styled("section")`
  display: flex;
  justify-content: center;
  align-items: center;
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
    justify-content: flex-end
  }
`;
