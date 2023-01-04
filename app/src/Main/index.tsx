/* eslint-disable linebreak-style */
/* eslint-disable indent */
import {
    CategoriesContainer,
    Container,
    Footer,
    FooterContainer,
    MenuContainer
} from './styles';
import { useState } from 'react';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';


export function Main() {

    const [isTableModalVisible, setIsTableModalVisible] = useState(false);
    const [selectedTable, setSelectedTable] = useState('');

    function handleSaveTable (table: string) {
        setSelectedTable(table);
    }

    function handleCancelOrder () {
        setSelectedTable('');
    }
    return (
        <>
            <Container>
                <Header
                    selectedTable={selectedTable}
                    onCancelOrder={handleCancelOrder}
                />

                <CategoriesContainer>
                    <Categories/>
                </CategoriesContainer>

                <MenuContainer>
                    <Menu/>
                </MenuContainer>

            </Container>
            <Footer>
                <FooterContainer>
                    {!selectedTable && (
                        <Button onPress={() => setIsTableModalVisible(true)} disabled={false}>
                            Novo Pedido
                        </Button>
                    )}
                </FooterContainer>
            </Footer>

            <TableModal visible={isTableModalVisible} onClose={() => setIsTableModalVisible(false)} onSave={handleSaveTable}/>
        </>
    );
}
