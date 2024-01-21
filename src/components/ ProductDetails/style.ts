import styled from "styled-components";

export const DetailContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
   
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
`
export const DetailBox = styled.div`
    width: 1050px;    
    margin: 200px;
    background-color: #FFFFFF;
    border-radius: 20px;
    padding: 75px;
    display: flex;
    flex-direction: column;
    position: relative;
    h1 {
        font-size: 37px;
        font-weight: 600;
        margin-bottom: 30px;
    }

    .close {
        font-size: 30px;
        font-weight: 500;
        color: #9f9f9f;
        position: absolute;
        top: 45px;
        right: 45px;
        cursor: pointer;
    }
`

export const AdditionalContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    h2 {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    p {
        font-size: 22px;
        font-weight: 200;
        margin-bottom: 30px;
    }

    .additional-box {
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

            button {
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
    }
`
export const ObservationContainer = styled.div`
    width: 100%;
    height: 225px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    h2 {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .observation-box {
        width: 100%;
        max-width: 900px;
        height: 100%;
        background-color: #F4F4F4;
        border-radius: 5px;
        border: none;
        padding: 22px;
        font-size: 22px;

        &:focus {
            border-color: #bcbaba; 
            outline: none; 
  }
    }
`
export const ButtonBoxDetails = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: flex-end;

    button {
        width: 288px;
        height: 54px;   
        border-radius: 15px;  
        margin-left: 30px;
        font-size: 20px;

        &:first-child {
            color: #125c13;
            background-color: #FFFFFF;
            border: 2px solid #125c13;
        }

        &:last-child {
            color: #FFFFFF;
            background-color: #125c13;
            border: none;
        }
        &:hover {
            cursor: pointer;
        }
    }
`