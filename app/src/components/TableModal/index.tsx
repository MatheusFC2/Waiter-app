/* eslint-disable linebreak-style */
/* eslint-disable indent */
import { useState } from 'react';
import { Modal, Platform, TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { ModalBody, Overlay, Header, Form, Input} from './styles';
import { Close } from '../Icons/Close';
import { Button } from '../Button';

interface TableModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (table: string) => void;
}

export function TableModal({visible, onClose, onSave} : TableModalProps) {

    const [table, setTable] = useState('');
    function handleSave () {
       onSave(table);
       onClose();
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType='fade'
        >
            <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
                <ModalBody>
                    <Header>
                        <Text weight='600'>Informe a mesa</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Close color='#666'/>
                        </TouchableOpacity>
                    </Header>

                    <Form>
                        <Input
                            placeholder='Numero a mesa'
                            placeholderTextColor='#666'
                            keyboardType='number-pad'
                            onChangeText={setTable}
                        />

                        <Button onPress={handleSave} disabled={table.length === 0}>Salvar</Button>
                    </Form>
                </ModalBody>
            </Overlay>
        </Modal>
    );
}
