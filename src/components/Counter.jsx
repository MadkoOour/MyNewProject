import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {decrement, increment, incrementByAmount, reset} from '../app/reducers/CounterSlice';

export default function Counter() {
  const count = useSelector(state => state.counter.value);
  console.log(count)
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(increment())}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <Text style={styles.count}>{count}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrement())}>
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(reset())}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View>
      <TextInput
          placeholder="Add amount"
          style={styles.textInput}
          onChangeText={text => {
            console.log(text);
            dispatch(incrementByAmount(text))
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  count: {
    fontSize: 32,
    margin: 10,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#245687',
    borderRadius: 5,
  },
});
