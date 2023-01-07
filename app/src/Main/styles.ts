/* eslint-disable linebreak-style */
import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

/*  line 9 -  se tiver no android o valor dele 24px value padrao do android, se for ios envia 0*/
export const Container = styled.View`
    margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
    flex: 1;
    background: #fafafa;
`;

export const CategoriesContainer = styled.View`
    height: 73px;
    margin-top: 34px;
`;
export const MenuContainer = styled.View`
    height: 50px;
    flex: 1;
`;
export const Footer = styled.View`
    min-height: 110px;
    backgroundL #fff;
    padding: 16px 16px;
`;
export const FooterContainer = styled.SafeAreaView`
    min-height: 110px;
`;
export const CenteredContainer = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`;
