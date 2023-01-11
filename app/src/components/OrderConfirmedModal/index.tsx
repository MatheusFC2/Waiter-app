/* eslint-disable linebreak-style */
/* eslint-disable indent */

import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Container, OkButton } from './styles';
import { Text } from '../Text';
import { StatusBar } from 'expo-status-bar';

interface OrderConfirmedModalProps {
    visible: boolean;
    onOk: () => void;
}

export function OrderConfirmedModal ({ visible, onOk } : OrderConfirmedModalProps) {
    return (
        <Modal
            visible={visible}
            animationType="fade"
        >

            <StatusBar style='light'/>
            <Container>
                <CheckCircle/>
                <Text
                    size={20}
                    weight="600"
                    color='#fff'
                    style={{ marginTop: 12}}
                >Pedido Confirmado</Text>
                <Text
                    weight="600"
                    color='#fff'
                    opacity={0.9}
                    style={{ marginTop: 12}}
                >O pedido já entrou na fila de produção!</Text>


                <OkButton onPress={onOk}>
                    <Text color='#D73035' weight='600'>OK</Text>
                </OkButton>
            </Container>
        </Modal>
    );
}
