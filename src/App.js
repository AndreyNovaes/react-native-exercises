import React from 'react';
import {SafeAreaView} from 'react-native';
import style from './style';
import ListRender from './components/ListRender/Lista';

export default function App() {
  console.warn('salve');
  return (
    <SafeAreaView style={style.App}>
      <ListRender />
    </SafeAreaView>
  );
}
