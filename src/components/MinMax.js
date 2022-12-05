import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import style from '../style';

export default function MinMax({num1, num2}) {
  const max = num1 > num2 ? num1 : num2;
  const min = max === num1 ? num2 : num1;
  return (
    <SafeAreaView>
      <Text style={style.HighHeightText}>
        O valor {max} é maior que o valor {min}
      </Text>
    </SafeAreaView>
  );
}
