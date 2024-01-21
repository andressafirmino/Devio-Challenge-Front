import styled from "styled-components";
import { FaWallet } from "react-icons/fa6";

export const PaymentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    .payment {
        width: 100%;       
        display: flex; 
        margin-bottom: 40px;
        
        p {
            font-size: 30px;
            font-weight: 700;
        }
    }

    .subtitle {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #000000;
    }

    .payment-box {
        width: 100%;
        display: flex;  
    }

    .payment-block {
        width: 50%;
    }

    .client-data {
        width: 80%;
        display: flex;
        justify-content: space-between;

        .client-data-input {
            width: 65%;
        }

        .client-data-code {
            width: 25%;
        }
        input {
            width: 100%;
            height: 40px;
            background-color: #F4F4F4;
            border: none;
            border-radius: 3px;
            padding-left: 15px;

            &:focus {
            border-color: #bcbaba; 
            outline: none; 
            }
        }

        .code {
            width: 100%;
            height: 40px;
            background-color: #F4F4F4;
            border-radius: 3px;
            padding-left: 15px;
            display: flex;
            align-items: center;
        }
    }

    .payment-data {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .payment-data-input {
            width: 45%;
            
            input, div {
                width: 100%;
                height: 40px;
                background-color: #F4F4F4;
                border: none;
                border-radius: 3px;
                padding-left: 15px;
                display: flex;
                align-items: center;
                font-size: 20px;
                

                &:focus {
                border-color: #bcbaba; 
                outline: none; 
                }
            }
        }      
    }
`
export const WalletIconStyle = styled(FaWallet)`
    font-size: 30px; 
    color: #125c13;
    margin-right: 15px;
`;


export const ButtonPayment = styled.div`
    width: 90%;
    height: 75px;
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;

    button {
        width: 360px;
        height: 67px;   
        border-radius: 30px;  
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