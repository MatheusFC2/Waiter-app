/* eslint-disable linebreak-style */
/* eslint-disable indent */

import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Container, Content, OrderHeader, Table } from './styles';

interface HeaderProps {
    selectedTable: string;
    onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder} : HeaderProps) {
    return (
        <Container>
            {!selectedTable && (
                <>
                    <Text>Bem vindo(a) ao </Text>
                    <Text size={24} weight="700">
                        Waiter<Text size={24}>APP</Text>
                    </Text>
                </>
            )}
            {selectedTable && (
                <Content>
                    <OrderHeader>
                        <Text size={24} weight="600">Pedido</Text>
                        <TouchableOpacity onPress={onCancelOrder}>
                            <Text color="#D73035" weight='600' size={14}>Cancelar Pedido</Text>
                        </TouchableOpacity>
                    </OrderHeader>
                    <Table>
                        <Text color='#666'>Mesa {selectedTable}</Text>
                    </Table>
                </Content>
            )}
        </Container>
    );
}
