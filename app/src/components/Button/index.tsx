/* eslint-disable linebreak-style */
/* eslint-disable indent */
import { ActivityIndicator } from 'react-native';
import { Text } from '../Text';
import { Container } from './styles';

interface ButtonProps {
    children: string;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
}

export function Button ({ children, onPress, disabled, loading } : ButtonProps) {
    return (
        <Container onPress={onPress} disabled={disabled || loading}>
            {!loading && (
                <Text weight='600' color='#fff'>
                    {children}
                </Text>
            )}

            {loading && (
                <ActivityIndicator color="#fff"/>
            )}
        </Container>
    );
}
