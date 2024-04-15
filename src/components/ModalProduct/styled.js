import styled from "styled-components";

export const Container = styled.div`
    width: 650px;
    height: auto;
    padding: 20px;
    color: black;
`

export const ProductArea = styled.div`
    height: 200px;
    display: flex;
`
export const ProductButtons = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`
export const ProductButton = styled.button`
    border: 0;
    background-color: #073c07;
    box-shadow: 4px 5px 0 rgba(0, 0, 0, 0.16);
    color: #FFF;
    font-size: 22px;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;

    &:first-child{
        padding: 5px 10px;
        font-size: 13px;
    }
`

export const ProductPhoto = styled.img`
    width: 310px;
    border-radius: 10px;
`

export const ProductInfoArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`
export const ProductDetails = styled.div`

`
export const ProductQuantityArea = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
`
export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    background-color: #073C07;
    border-radius: 5px;
`
export const ProductQtImage = styled.img`
    width: 24px;
    height: auto;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
`

export const ProductQtText = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #FFF;
`

export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: bold;
`
export const ProductName = styled.div`
    font-size: 30px;
    font-weight: bold;
`
export const ProductIngredients = styled.div`
    font-size: 14px;
`
