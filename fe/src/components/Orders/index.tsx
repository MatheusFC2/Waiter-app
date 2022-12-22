/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/react-in-jsx-scope */

import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
    {
		'_id': '639fbd1d24a0c1fd74c57d15',
		'table': '123',
		'status': 'WAITING',
		'products': [
			{
				'product': {
					'name': 'Pizza Quatro Queijos',
					'imagePath': '1671336669119-frango-catupiry.png',
					'price': 40,
				},
				'quantity': 3,
				'_id': '639fbd1d24a0c1fd74c57d16'
			},
			{
				'product': {
					'name': 'Coca Cola',
					'imagePath': '1671343203320-coca-cola.png',
					'price': 7,
				},
				'quantity': 2,
				'_id': '639fbd1d24a0c1fd74c57d17'
			}
		],
	},
];

export function Orders () {
  return (
    <Container>
        <OrdersBoard
            icon="🕒"
            title="Fila de espera"
            orders={orders}
        />
        <OrdersBoard
            icon="👨‍🍳"
            title="Em preparo"
            orders={[]}
        />
        <OrdersBoard
            icon="✅"
            title="Pronto!"
            orders={[]}
        />
    </Container>
  );
}
