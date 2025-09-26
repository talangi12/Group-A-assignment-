import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import TextInputWithLabel from '../components/TextInputWithLabel';
import PickerInput from '../components/PickerInput';
import { convertNumber } from '../utils/converter';

const bases = [
  { label: 'Decimal', value: '10' },
  { label: 'Binary', value: '2' },
  { label: 'Octal', value: '8' },
  { label: 'Hexadecimal', value: '16' },
];

const ConverterScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputBase, setInputBase] = useState('10');
  const [outputBase, setOutputBase] = useState('10');
  const [outputValue, setOutputValue] = useState('');
  const [error, setError] = useState('');

  const handleConversion = (text) => {
    setInputValue(text);
    setError('');

    if (!text) {
      setOutputValue('');
      return;
    }

    const { result, error: convError } = convertNumber(text, inputBase, outputBase);
    
    if (convError) {
      setError(convError);
      setOutputValue('');
    } else {
      setOutputValue(result);
    }
  };

  const handleBaseChange = (baseType, value) => {
    if (baseType === 'input') {
      setInputBase(value);
    } else {
      setOutputBase(value);
    }
    const { result, error: convError } = convertNumber(inputValue, baseType === 'input' ? value : inputBase, baseType === 'output' ? value : outputBase);
    if (convError) {
      setError(convError);
      setOutputValue('');
    } else {
      setError('');
      setOutputValue(result);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Number System Converter" />
      <View style={styles.content}>
        <PickerInput
          label="Convert From:"
          bases={bases}
          selectedValue={inputBase}
          onValueChange={(itemValue) => handleBaseChange('input', itemValue)}
        />
        <TextInputWithLabel
          label="Enter Number"
          value={inputValue}
          onChangeText={handleConversion}
          placeholder="e.g., 1010"
        />
        
        <PickerInput
          label="Convert To:"
          bases={bases}
          selectedValue={outputBase}
          onValueChange={(itemValue) => handleBaseChange('output', itemValue)}
        />
        <TextInputWithLabel
          label="Result"
          value={outputValue}
          readOnly={true}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default ConverterScreen;