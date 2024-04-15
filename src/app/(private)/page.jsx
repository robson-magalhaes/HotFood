"use client"

import * as C from './styled';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import MenuItem from '@/components/MenuItem';
import Cart from '@/components/Cart';
import { Provider } from 'react-redux';
import { store } from './store';

export default function Home({ children }) {
  return (
    <Provider store={store}>
      <C.Container>
        <C.Menu>
          <MenuItem title="Loja" icon='/assets/store.png' link="/" />
          <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
          <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/profile" />
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
