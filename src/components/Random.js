// Desafio 1:
// crie um componente que recebe 2 numeros via props, as propriedades min e max e
// Gerar um numero aleatorio entre min e max e mostrar na tela

import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import style from '../style';

export default function Random({min, max}) {
  const numberBetweenMinAndMax = Math.random() * (max - min) + min;
  const roundedRandomNumber = Math.round(numberBetweenMinAndMax);
  return (
    <SafeAreaView>
      <Text style={style.HighHeightText}>
        O valor aleatório entre {min} e {max} é igual ao número{' '}
        {roundedRandomNumber}
      </Text>
    </SafeAreaView>
  );
}
