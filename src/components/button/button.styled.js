import styled from "styled-components";

export const ButtonContainer = styled("div")`
  button {
    width: 269px;
    height: 53px;
    background: none;
    border-radius: 26.5px;
    border: 1px solid white;
    outline: none;
    color: white;
    cursor: pointer;
    font-size: 13px;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.15;
    letter-spacing: 1.01px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    .arrow-button {
        width: 23px;
        height: 1px;
        background-color: white;
        margin-left: 6px;
        &::after {
            content: "";
            position: absolute;
            width: 5px;
            height: 1px;
            background-color: white;
            transform: rotate(45deg) translate(5px, -7px);
        }
        &::before {
            content: "";
            position: absolute;
            width: 5px;
            height: 1px;
            background-color: white;
            transform: rotate(-45deg) translate(5px, 7px);
        }
    }
  }
`;
