import styled from 'styled-components';

export const FooterContainer = styled("div")`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
height: 203px;
background-color: #cbe346;

.footer-colum-1 {
    display: flex;
    width: 451px;
    height: 81px;
    margin: 64px 0 0 78px;

    .footer-row-1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 37px;

        .link-text-footer {
            font-family: "Helvetica Neue";
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 1.14px;
            cursor: pointer;

            .link-text-footer-emphasis {
                font-family: "Helvetica Neue Bold";
                font-weight: 900;
            }
        }
    }

    .footer-row-2 {
        display: flex;
        justify-content: space-between;
        width: 215px;

        .social-media-icons {
            width: 31px;
            height: 31px;
            margin-top: 13px;
            cursor: pointer;
        }
    }

}

.footer-column-2 {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 10%;
    margin-right: 63px;

    .logo-footer {
        width: 55px;
        height: 55px;
    }
}
`;