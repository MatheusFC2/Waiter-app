/* eslint-disable linebreak-style */
/* eslint-disable indent */

import { FlatList, Modal } from 'react-native';
import { Text } from '../Text';
import { Product } from '../../types/Product';
import { CloseButton, Footer, FooterContainer, Header, Image, Ingredient, IngredientsContainer, ModalBody, PriceContainer } from './styles';
import { Close } from '../Icons/Close';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';

interface ProductMaodalProps {
    visible: boolean;
    onClose: () => void;
    product: null | Product;
    onAddToCart: (product: Product) => void;
}

export function ProductModal ({ visible, onClose, product, onAddToCart}: ProductMaodalProps) {
    if (!product) {
        return null;
    }

    function handleAddToCart() {
        onAddToCart(product!);
        onClose();
    }
    return (
        <Modal
            visible={visible}
            animationType='slide'
            presentationStyle='pageSheet'
            onRequestClose={onClose}
        >
            <Image
                source={{
                    uri: `http://192.168.0.4:3001/uploads/${product.imagePath}`,
                }}
            >
                <CloseButton onPress={onClose}>
                    <Close/>
                </CloseButton>
            </Image>

            <ModalBody>
                <Header>
                    <Text size={24} weight="600">{product.name}</Text>
                    <Text color="#666" style={{ marginTop: 8}}>{product.description}</Text>
                </Header>

                {product.ingredients.length > 0 &&(
                    <IngredientsContainer>
                        <Text color="#666" weight='600' style={{ marginBottom: 10}}>Ingredientes</Text>
                        <FlatList
                            data={product.ingredients}
                            keyExtractor={ingredient => ingredient._id}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item: ingredient}) => (
                                <Ingredient>
                                    <Text>{ingredient.icon}</Text>
                                    <Text size={14} color="#666" style={{ marginLeft: 20 }}>{ingredient.name}</Text>
                                </Ingredient>
                            )}
                        />
                    </IngredientsContainer>
                )}

            </ModalBody>

            <Footer>
                <FooterContainer>
                    <PriceContainer>
                        <Text color='#666'>Preços</Text>
                        <Text color='#666' size={20} weight="600">{formatCurrency(product.price)}</Text>
                    </PriceContainer>
                    <Button onPress={handleAddToCart}>
                        Adicionar ao pedido
                    </Button>
                </FooterContainer>
            </Footer>
        </Modal>
    );
}
