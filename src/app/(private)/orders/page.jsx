"use client"

import * as C from './styled';
import { useSelector } from 'react-redux';
import { useLoginContext } from '@/context/LoginContext.jsx';
import { useEffect, useState } from 'react';

const HomeScreen = () => {
    const { user, dispath } = useLoginContext();
    const products = useSelector(state => state.cart.products);
    const [total, setTotal] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let totalQt = 0;
        let totalP = 0;
        products.forEach(x => {
            totalQt += x.quantity
            totalP += x.price * x.quantity
        });
        setTotal(totalQt);
        setTotalPrice(totalP);
    }, [products]);
    return (
        <C.Container>
            <h1>{user.token ? 'Você esta logado' : 'Voce não esta logado'}</h1>
            <br />
            <hr />
            
            {products.length > 0 &&
                <table border="1" className='border border-blue-600'>
                    <thead >
                        <tr>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((x, index) => (
                            <tr key={index}>
                                <th>{x.name}</th>
                                <th>{x.quantity}</th>
                                <th>R$ {(x.price * x.quantity).toFixed(2)}</th>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className='bg-blue-600'>
                        <tr>
                        <th>Total</th>
                        <th>{total}</th>
                        <th>R$ {totalPrice}</th>
                        </tr>
                    </tfoot>
                </table>

            }
        </C.Container>
    )
}
export default HomeScreen;