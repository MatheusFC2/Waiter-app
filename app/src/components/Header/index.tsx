/* eslint-disable linebreak-style */

import { Text } from '../Text';
import { Container } from './styles';

/* eslint-disable indent */
export function Header() {
    return (
        <Container>
            <Text>Bem vindo(a) ao </Text>
            <Text size={24} weight="700">
                Waiter<Text size={24}>APP</Text>
            </Text>
        </Container>
    );
}
