import { useEffect, useState } from 'react';
import * as C from './styled';
import { useDispatch } from 'react-redux';

export default ({ data, setModalStatus }) => {
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);
    useEffect(()=>{
        setQuantity(1);
    },[data]);

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_PRODUCT',
            payload:{data, quantity}
        })
        setModalStatus(false);
    }
    return (
        <C.Container>
            <C.ProductArea>
                <C.ProductPhoto src={data.image} alt={data.name} />
                <C.ProductInfoArea>

                    <C.ProductDetails>
                        <C.ProductName>{data.name}</C.ProductName>
                        <C.ProductIngredients>{data.ingredients}</C.ProductIngredients>
                    </C.ProductDetails>
                    <C.ProductQuantityArea>
                        <C.ProductQuantity>
                            <C.ProductQtImage src="/assets/minus.png" alt='icon minus' onClick={()=>setQuantity(quantity > 1 ? quantity - 1 : quantity)}/>
                            <C.ProductQtText>{quantity}</C.ProductQtText>
                            <C.ProductQtImage src="/assets/plus.png" alt='icon plus' onClick={()=>setQuantity(quantity + 1)}/>
                        </C.ProductQuantity>
                        <C.ProductPrice>R$ {(data.price * quantity).toFixed(2)}</C.ProductPrice>
                    </C.ProductQuantityArea>

                </C.ProductInfoArea>
            </C.ProductArea>
            <C.ProductButtons>
                <C.ProductButton onClick={()=>setModalStatus(false)}>Cancelar</C.ProductButton>
                <C.ProductButton onClick={handleAddToCart}>Adicionar ao carrinho</C.ProductButton>
            </C.ProductButtons>
        </C.Container>
    )
}