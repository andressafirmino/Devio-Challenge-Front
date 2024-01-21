import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 1350px;
    height: calc(100vh - 60px);
    margin: 120px auto 0;
    padding-left: 24px;
`
export const Title = styled.p`
    font-size: 30px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 15px;
`
export const Subtitle = styled.p`
    font-size: 22px;
    font-weight: 200;
    color: #000000;
    margin-bottom: 45px;
`
export const CategoriesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 45px;
    margin-right: 30px;
`
export const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    & > div:nth-child(4n) {
        margin-right: 0;
    }
`
export const Loading = styled.img `
    width: 30%; 
    display: block;
    margin: 150px auto;
`