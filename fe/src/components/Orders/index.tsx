/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useState } from 'react';
import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';
import { api } from '../../utils/api';
import socketIo from 'socket.io-client';



export function Orders () {

    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const socket = socketIo('http://localhost:3001', {
            transports: ['websocket'],
        });


        socket.on('order@new', (orderDetails) => {
            setOrders(prevState => prevState.concat(orderDetails));
        });
    }, []);

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

    function handleOrderStatusChange(orderId: string, status: Order['status']) {
        setOrders((prevState) => prevState.map((order) => (
            order._id === orderId
                ? { ...order, status}
                : order
        )));
    }
  return (
    <Container>
        <OrdersBoard
            icon="🕒"
            title="Fila de espera"
            orders={waiting}
            onCancelOrder={handleCancelOrder}
            onChangeOrderStatus={handleOrderStatusChange}
        />
        <OrdersBoard
            icon="👨‍🍳"
            title="Em preparo"
            orders={inProduction}
            onCancelOrder={handleCancelOrder}
            onChangeOrderStatus={handleOrderStatusChange}
        />
        <OrdersBoard
            icon="✅"
            title="Pronto!"
            orders={done}
            onCancelOrder={handleCancelOrder}
            onChangeOrderStatus={handleOrderStatusChange}
        />
    </Container>
  );
}
