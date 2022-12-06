import React from 'react';
import {Button} from 'react-native';

export default function CustomButton(props) {
  return (
    <Button title={props.title} color={props.color} onPress={props.onPress} />
  );
}
