import styled from "styled-components";

export const ButtonBox = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: flex-end;

    button {
        width: 360px;
        height: 67px;   
        border-radius: 15px;  
        margin-left: 30px;
        font-size: 20px;

        &:first-child {
            color: #9f9f9f;
            background-color: #FFFFFF;
            border: 2px solid #9f9f9f;
        }

        &:last-child {
            color: #FFFFFF;
            background-color: #9f9f9f;
            border: none;
        }
        &:hover {
            cursor: pointer;
        }
    }


    .selected {
            &:first-child {
                color: #125c13;
                background-color: #FFFFFF;
                border: 2px solid #125c13;
            }

            &:last-child {
                background-color: #125c13;
            }
        }
`