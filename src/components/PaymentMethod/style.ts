import styled from "styled-components"

export const FormPaymentContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`
export const FormPayment = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #9f9f9f;
    border-radius: 3px;
    padding: 0 25px;
    margin-bottom: 20px;

    svg {
        font-size: 25px; 
        color: #125c13;
        margin-right: 15px;
    }

    p {
        font-size: 25px;
        font-weight: 500;
    }

    button {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                background-color: #FFFFFF;
                border: 1.5px solid #125c13;
                cursor: pointer;
            }
    .selected {
        background-color: #125c13;
    }
`