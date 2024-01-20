import styled from "styled-components";

export const CategoryContainer = styled.div`
    width: 205px;
    height:226px;
    border-radius: 15px;  
    box-shadow: 0px 4px 4px 4px #0000000D;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;  
    cursor: pointer;       

    .name {
        margin: 27px 0;
        font-size: 18px;
        font-weight: 600;
    }
    img {
        width: auto;
        height: 130px;
        display: flex;
        justify-content: center;
    }
`