import styled from "styled-components";

export const AdditionalContainer = styled.div`
        display: flex;

        .additional-image {
            width: 150px;
            height: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 12px;
            box-shadow: 0px 4px 6px 0px #0000000D;
            margin-right: 30px;

            img {
                width: 100%;
            }
        }

        .additional-description {
            width: 525px;
            display: flex;
            flex-direction: column;
            padding: 30px;

            .additional-name {
                font-size: 22px;
                font-weight: 600;
                margin-bottom: 22px;
            }

            .additional-text {
                font-size: 15px;
                font-weight: 200;
            }
        }

        .additional-price-box {
            width: 180px;
            height: 150px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .additional-price{
                font-size: 22px;
                font-weight: 500;
                color: #9f9f9f;
            }

            icon-icon {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: #FFFFFF;
                border: 1.5px solid #125c13;
                cursor: pointer;
            }

            .selected {
                    background-color: #125c13;
                }
        }
    `

export const StyledIcon = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: #125c13;
`;