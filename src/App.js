import React from 'react';
import {SafeAreaView} from 'react-native';
import Children from './components/PropsDrilling/IndirectComm/Children';
import Father from './components/PropsDrilling/IndirectComm/Father';
import style from './style';
// import Father from './components/PropsDrilling/DIrectComm/Father';
// import Counter from './components/Counter';
// import CustomButton from './components/Button';
// import Random from './components/Random';
// import MinMax from './components/MinMax';
// import ExampleComponent from './components/ExampleComponent';
// import {FirstComponent, SecondComponent} from './components/MultiComponents';
// const handleButtonPress = () => {
//   console.warn('Exec #02!');
// };

export default function App() {
  console.warn('salve');
  return (
    <SafeAreaView style={style.App}>
      {/* <ExampleComponent />
      <FirstComponent />
      <SecondComponent /> */}
      {/* <MinMax num1={3} num2={20} /> */}
      {/* <Random min={1} max={60} /> */}
      {/* <CustomButton
        title="Executar #01!"
        color="#F00"
        onPress={handleButtonPress}
      /> */}
      {/* <Counter initialNumber={100} step={10} /> */}
      {/* <Father /> */}
      <Father>
        <Children a={13} b={100} />
      </Father>
    </SafeAreaView>
  );
}
