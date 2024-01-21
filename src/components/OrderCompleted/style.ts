import styled from "styled-components";

export const OrderCompletedContainer = styled.div`
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

    div {
        width: 700px;    
        margin: 200px;
        background-color: #FFFFFF;
        border-radius: 20px;
        padding: 75px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        img {
            width: 400px;
            margin-bottom: 40px;
        }

        h1 {
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 30px;
        }

        p {
            font-size: 20px;
            font-weight: 200;
        }

        .close {
            font-size: 30px;
            font-weight: 500;
            color: #9f9f9f;
            position: absolute;
            top: 35px;
            right: 35px;
            cursor: pointer;
        }
    }
`
