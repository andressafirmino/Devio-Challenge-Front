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
export const DetailItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 120px;
    margin-bottom: 100px;

    .image-box {
        width: 225px;
        height: 180px;
        position: relative;
        background-color: rgb(18, 92, 19, 0.5);
        box-shadow: 0px 4px 6px 0px #0000000D;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 150px;
            z-index: 20;
        }

        .image-box-bottom  {
            width: 100%;
            height: 97px;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: #FFFFFF;
            border-radius: 15px;
        }

        
    }

    .description-box {
        width: 450px;
        height: 100%;
        display: flex;
        flex-direction: column;

        .name {
            font-size: 30px;
            font-weight: 500;
            margin-bottom: 15px;
        }

        .description-text {
            font-size: 22px;
            font-weight: 200;
        }
    }

    .price {
        width: 150px;
        padding-top: 15px;

        p {
            font-size: 25px;
            font-weight: 500;
        }
    }
`
export const CounterButton = styled.div`
    width: 126px;
    height: 43px;
    border: 2px solid #125c13;
    border-radius: 39px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 60px;
    div {
        width: 45px;
        height: 30px;
        font-size: 16px;
        font-weight: 200;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button {
        width: 48px;
        height: 43px;
        background-color: #FFFFFF;
        border-radius: 50%;
        background-color: #125c13;
        border: none;
        color: #FFFFFF;
    
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-size: 38px;
            font-weight: 200;
        }
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
export const SummaryContainer = styled.div`
    width: 100%;
    border: 1px solid #9f9f9f;
    border-radius: 3px;
    padding: 60px;
    margin-bottom: 30px;

    p {
            font-size: 22px;
            font-weight: 400;
            color: #9f9f9f;
        }

    .summary-details {
        display: flex;
        justify-content: space-between;
        margin-bottom: 45px;   
    }
    .dashed-line {
        width: 100%;
        height: 1px;
        border-top: 2px dashed #9f9f9f;
        margin: 45px 0;
    }

    .total {
        margin-top: 30px;
        font-size: 37px;
        font-weight: 600;
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