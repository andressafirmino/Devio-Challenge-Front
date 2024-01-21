import styled from "styled-components";

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