import styled from "styled-components";

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