import styled from "styled-components";

export const ProductContainer = styled.div`
    width: 258px;
    height: 324px;
    border-radius: 15px;
    margin-right: 90px;
    margin-bottom: 45px;
    position: relative;
    background-color: #125c13;
    box-shadow: 0px 4px 6px 0px #0000000D;
    position: relative;
    
    .img {
        width: 258px;
        height: 130px;
        position: absolute;
        bottom: 180px;
        left: 0;
        display: flex;
        justify-content: center;
        z-index: 1;
    }
    .information {
    width: 258px;
    height: 226px;
    border-radius: 15px;    
    background-color: #FFFFFF;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-top: 45px;

    position: absolute;
    bottom: 0;
    left: 0;

    .price {
        margin: 27px 0;
        font-size: 25px;
        font-weight: 600;
    }

    .description {
        width: 225px;
        height: 90px;
        font-size: 15px;
        font-weight: 200;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .name {
        font-size: 22px;
        font-weight: 500;
        margin-top: 15px;
    }
    }

    .selected {
        width: 258px;
        height: 324px;
        border-radius: 15px;
        background-color: rgb(18, 92, 19, 0.3);
        position: absolute;
        top:0;
        left: 0;
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    svg {
            font-size: 50px;
            font-weight: 700;
            color: #FFFFFF;
            opacity: 1;
        }
`