// Here are some basic example of JS questions.
// I create Component directory and Add examples,
// and import example here.
//--------------------------------------------------------------------------------------------------

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Counter from './src/component/counter';
import AgeValidation from './src/component/ageValidation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Counter /> */}
      <AgeValidation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
