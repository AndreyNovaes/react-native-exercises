import React from 'react';
import {SafeAreaView} from 'react-native';
import Children from './Children';

export default function Father() {
  let x = 13;
  let y = 100;

  return (
    <SafeAreaView>
      <Children a={x} b={y} />
    </SafeAreaView>
  );
}
