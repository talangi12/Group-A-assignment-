import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextInputWithLabel = ({ label, value, onChangeText, placeholder, readOnly = false }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={readOnly ? styles.inputReadOnly : styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={!readOnly}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    fontSize: 18,
  },
  inputReadOnly: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#e9e9e9',
    fontSize: 18,
    color: '#555',
  },
});

export default TextInputWithLabel;