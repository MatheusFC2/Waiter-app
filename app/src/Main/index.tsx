/* eslint-disable linebreak-style */
/* eslint-disable indent */
import {
    CategoriesContainer,
    Container,
    Footer,
    FooterContainer,
    MenuContainer
} from './styles';

import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';


export function Main() {
    return (
        <>
            <Container>
                <Header/>

                <CategoriesContainer>
                    <Categories/>
                </CategoriesContainer>

                <MenuContainer>
                    <Menu/>
                </MenuContainer>

            </Container>
            <Footer>
                <FooterContainer>
                    <Button onPress={() => alert('FUNCIONOUKRL 🚀')} disabled={false}>
                        Novo Pedido
                    </Button>
                </FooterContainer>
            </Footer>
        </>
    );
}
