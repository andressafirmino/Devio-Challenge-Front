import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 375px;
    height: 135px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 60px;

    p {
        font-size: 37px;
        font-weight: 700;
    }

    input {
        width: 100%;
        height: 52px;
        font-size: 15px;
        border-radius: 5px;
        border: 1px solid #F4F4F4;
        outline: none;
        background-color: #F4F4F4;
        padding: 18px;
        
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
        ::placeholder {
            font-weight: 200;
            color: #989898;
        }
    }
`