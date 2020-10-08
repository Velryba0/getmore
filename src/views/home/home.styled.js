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
      font-family: "Helvetica Neue";
      font-size: 53px;
      color: white;

      .text-emspanhasys {
        font-family: "Helvetica Neue Bold";
        color: #cbe346;
      }
    }
  }
`;
