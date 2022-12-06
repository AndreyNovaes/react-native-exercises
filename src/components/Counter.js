import React, {useState} from 'react';
import {Text, SafeAreaView} from 'react-native';
import style from '../style';
import CustomButton from './Button';

export default function Counter({initialNumber = 0, step = 1}) {
  const [number, setNumber] = useState(initialNumber);

  const handleIncrease = () => {
    setNumber(number + step);
  };

  const handleDecrease = () => {
    setNumber(number - step);
  };

  return (
    <SafeAreaView>
      <Text style={style.HighHeightText}>O valor do número é: {number}</Text>
      <CustomButton title="Incrementar" color="#F00" onPress={handleIncrease} />
      <CustomButton title="Decrementar" color="#0F0" onPress={handleDecrease} />
    </SafeAreaView>
  );
}
