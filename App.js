// Here are some basic example of JS questions.
// I create Component directory and Add examples,
// and import example here.
//--------------------------------------------------------------------------------------------------

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Counter from './src/component/counter';

const App = () => {
  return (
    <View style={{flex:1}}>
      <Counter />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
