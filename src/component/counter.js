//counter example

import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Counter = () => {
  const [counter, setCounter] = useState({
    value: 0,
  });
  const Add = () => {
    setCounter({value: counter.value + 1});
  };
  const Sub = () => {
    setCounter({value: counter.value - 1});
  };
  const Reset = () => {
    setCounter({value: 0});
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.textView}>
        <Text style={styles.counterTxt}>{counter.value}</Text>
      </View>
      <View style={styles.Subview}>
        <Button title="INCREASE" onPress={Add} />
        <Button title="DECREASE" onPress={Sub} />
        <Button title="RESET" onPress={Reset} />
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  Subview: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  counterTxt: {
    textAlign: 'center',
    fontSize: 20,
  },
  textView: {
    alignContent: 'center',
  },
});
