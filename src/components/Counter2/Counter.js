import React, {useState} from 'react';
import {Text} from 'react-native';
import CustomButton from '../Button';
import Display from './Display';

export default function Counter() {
  const [num, setNum] = useState(0);

  const handleIncrease = () => {
    setNum(num + 1);
  };

  const handleDecrease = () => {
    setNum(num - 1);
  };

  return (
    <>
      <Text>Contador</Text>
      <Display num={num} />
      <CustomButton title="+" color="#F00" onPress={handleIncrease} />
      <CustomButton title="-" color="#0F0" onPress={handleDecrease} />
    </>
  );
}
