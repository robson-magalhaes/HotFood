"use client"

import { useDispatch, useSelector } from 'react-redux';
import * as C from './styled';
import { useState } from 'react';

export const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);

    const [show, setShow] = useState(true);

    const handleCartClick = () => {
        setShow(!show);
    }
    const handleProductChange = (key, type) => {
        dispatch({type: "CHANGE_PRODUCT", payload: { key:key, type:type }})
    }
    return (
        <C.CartArea>
            <C.CartHeader onClick={handleCartClick}>
                <C.CartIcon src="/assets/cart.png" alt="icone de carrinho" />
                <C.CartText>Meu Carrinho ({products.length})</C.CartText>
                {show && <C.CartIcon src="/assets/down.png" />}

            </C.CartHeader>
            <C.CartBody show={show}>
                <C.ProductArea>
                    {products.map((x, index) => (
                        <C.ProductItem key={index}>
                            <C.ProductPhoto src={x.image} />
                            <C.ProductInfoArea>
                                <C.ProductName>{x.name}</C.ProductName>
                                <C.ProductPrice>R$ {(x.quantity * x.price).toFixed(2)}</C.ProductPrice>
                            </C.ProductInfoArea>
                            <C.ProductQuantityArea>
                                <C.ProductQtIcon
                                    src="/assets/minus.png"
                                    onClick={() => handleProductChange(index, '-')} />
                                <C.ProductQtText>{x.quantity}</C.ProductQtText>
                                <C.ProductQtIcon
                                    src="/assets/plus.png"
                                    onClick={() => handleProductChange(index, '+')} />
                            </C.ProductQuantityArea>
                        </C.ProductItem>
                    ))}

                </C.ProductArea>

            </C.CartBody>
        </C.CartArea>
    )
}
export default Cart;