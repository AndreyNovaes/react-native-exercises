import React from 'react';
import {SafeAreaView} from 'react-native';
import Random from './components/Random';
import style from './style';
// import MinMax from './components/MinMax';
// import ExampleComponent from './components/ExampleComponent';
// import {FirstComponent, SecondComponent} from './components/MultiComponents';

export default function App() {
  console.warn('salve');
  return (
    <SafeAreaView style={style.App}>
      {/* <ExampleComponent />
      <FirstComponent />
      <SecondComponent /> */}
      {/* <MinMax num1={3} num2={20} /> */}
      <Random min={1} max={60} />
    </SafeAreaView>
  );
}
