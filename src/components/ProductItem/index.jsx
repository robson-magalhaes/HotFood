import * as C from './styled';

export default ({data, click}) => {
    const handleClick = () => {
        click(data);
    }
    return(
        <C.Container onClick={handleClick}>
            <C.ProductPhotoArea>
                <C.ProductPhoto src={data.image} alt={data.name}/>
            </C.ProductPhotoArea>
            <C.ProductInfoArea>
                <C.ProductName>{data.name}</C.ProductName>
                <C.ProductPrice>R$ {data.price}</C.ProductPrice>
                <C.ProductIngredients>{data.ingredients}</C.ProductIngredients>
            </C.ProductInfoArea>
            <C.ProductButtonArea>
                <C.ProductButton src="/assets/next.png" />
            </C.ProductButtonArea>
        </C.Container>
    )
}