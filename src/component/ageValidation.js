//Age validation example, in this example we give a range of age and range of weight.
// and user submit thier weight and age. and appropriate result shown.

import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const AgeValidation = () => {
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  //console.log('age', age);
  const calCulation = () => {
    if (age === null || age === undefined || age === '') {
      Alert.alert('please fill the form');
    } else {
      if (weight === null || weight === undefined || weight === '') {
        Alert.alert('fill the form');
      }
    }

    if (age >= 5 && age <= 7) {
      if (weight >= 15 && weight <= 20) {
        console.log("yo're fit1");
      } else {
        console.log('not fit1');
      }
    } else if (age >= 8 && age <= 10) {
      if (weight >= 21 && weight <= 25) {
        console.log("you're fit2");
      } else {
        console.log('not fit 2');
      }
    } else if (age >= 11 && age <= 15) {
      if (weight >= 26 && weight <= 30) {
        console.log("you're fit3");
      } else {
        console.log('not fit 3');
      }
    } else if (age >= 16 && age <= 20) {
      if (weight >= 31 && weight <= 40) {
        console.log("you're fit4");
      } else {
        console.log('not fit 4');
      }
    } else {
      console.log('you are not fit');
    }
  };
  return (
    <View>
      <TextInput
        placeholder="Enter Age"
        style={styles.txtInput}
        onChangeText={e => {
          setAge(e);
        }}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Enter Weight"
        style={styles.txtInput}
        onChangeText={e => {
          setWeight(e);
        }}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.view} onPress={calCulation}>
        <Text>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AgeValidation;

const styles = StyleSheet.create({
  txtInput: {
    borderWidth: 1.5,
  },
  view: {
    marginTop: 20,
    alignItems: 'center',
    elevation: 40,
    paddingVertical: 10,
    paddingHorizontal: 50,
    marginHorizontal: 40,
    backgroundColor: '#009688',
    borderRadius: 10,
  },
});
