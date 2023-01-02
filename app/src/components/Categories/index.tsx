/* eslint-disable linebreak-style */
/* eslint-disable indent */
import { FlatList } from 'react-native';

import { categories } from '../../mocks/categories';
import { Text } from '../Text';

import {Category, Icon } from './styles';

export function Categories () {
    return (
        <FlatList
            horizontal
            data={categories}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 24 }} // padding dentro do container
            keyExtractor={category => category._id}
            renderItem={({ item: category}) => (
                <Category>
                    <Icon>
                        <Text>{category.icon}</Text>
                    </Icon>
                    <Text size={14} weight="600">{category.name}</Text>
                </Category>
            )}
        />
    );
}
