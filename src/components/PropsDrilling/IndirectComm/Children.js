import React from 'react';
import {Text} from 'react-native';
import style from '../../../style';

export default function Children({a, b}) {
  return (
    <>
      <Text style={style.HighHeightText}>
        O valor de a é: {a} e o valor de b é: {b}
      </Text>
    </>
  );
}
