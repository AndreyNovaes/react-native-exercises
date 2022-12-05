import React from 'react';
import {Text} from 'react-native';
import Styles from '../style';

const FirstComponent = () => {
  return <Text style={Styles.HighHeightText}>HighHeightText</Text>;
};

const SecondComponent = () => {
  return <Text>Second</Text>;
};

export {FirstComponent, SecondComponent};
