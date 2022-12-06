import React from 'react';
import {Text, FlatList} from 'react-native';
import style from '../../style';
import Produtos from './Produtos';

export default function ListRender() {
  const productRender = ({item}) => {
    return (
      <Text>
        {item.name} {item.price}
      </Text>
    );
  };

  return (
    <>
      <Text style={style.HighHeightText}>Lista</Text>
      <FlatList
        data={Produtos}
        keyExtractor={item => `${item.id}`}
        renderItem={productRender}
      />
    </>
  );
}
