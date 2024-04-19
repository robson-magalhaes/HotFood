"use client"

import * as C from './styled';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import MenuItem from '@/components/MenuItem';
import Cart from '@/components/Cart';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { MenuAtivo } from '@/helper/menuActive';
import { useEffect, useState } from 'react';

export default ({ children }) => {
  const [ativo, setAtivo] = useState([]);
  const handleActiveMenu = (link) => {
    let menu = MenuAtivo(link);
     setAtivo(menu);
   }
  useEffect(()=>{
    handleActiveMenu(['/']);
  },[]);
  
  return (
    <Provider store={store}>
      <C.Container>
        <C.Menu>
          {
            <>
              <MenuItem 
              title="Loja" 
              icon='/assets/store.png' 
              link="/" 
              onClick={handleActiveMenu} 
              ativo={ativo['/']}
              />
              <MenuItem 
              title="Pedidos" 
              icon='/assets/order.png' 
              link="/orders" 
              onClick={handleActiveMenu} 
              ativo={ativo['/orders']}
              />
              <MenuItem 
              title="Meu Perfil" 
              icon='/assets/profile.png' 
              link="/profile" 
              onClick={handleActiveMenu} 
              ativo={ativo['/profile']}
              />
            </>
          }
        </C.Menu>
        <C.PageBody>
          {children}
          <ReactTooltip id="tip-top" place="top" effect="solid" />
          <ReactTooltip id="tip-right" place="right" effect="solid" />
        </C.PageBody>
        <Cart />
      </C.Container>
    </Provider>
  );
}