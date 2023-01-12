/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useState } from 'react';
import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';
import { api } from '../../utils/api';



export function Orders () {

    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        api.get('/orders')
        .then(({ data }) => {
            setOrders(data);
        });
    }, []);


    const waiting = orders.filter((order) => order.status === 'WAITING');
    const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION');
    const done = orders.filter((order) => order.status === 'DONE');

    function handleCancelOrder(orderId: string) {
        setOrders((prevState) => prevState.filter(order => order._id !== orderId));
    }

  return (
    <Container>
        <OrdersBoard
            icon="🕒"
            title="Fila de espera"
            orders={waiting}
            onCancelOrder={handleCancelOrder}
        />
        <OrdersBoard
            icon="👨‍🍳"
            title="Em preparo"
            orders={inProduction}
            onCancelOrder={handleCancelOrder}
        />
        <OrdersBoard
            icon="✅"
            title="Pronto!"
            orders={done}
            onCancelOrder={handleCancelOrder}
        />
    </Container>
  );
}
