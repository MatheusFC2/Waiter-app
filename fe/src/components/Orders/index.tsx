/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */

import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

export function Orders () {
  return (
    <Container>
        <OrdersBoard
            icon="🕒"
            title="Fila de espera"
        />
        <OrdersBoard
            icon="👨‍🍳"
            title="Em preparo"
        />
        <OrdersBoard
            icon="✅"
            title="Pronto!"
        />
    </Container>
  );
}
