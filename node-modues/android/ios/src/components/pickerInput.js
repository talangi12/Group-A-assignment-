import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PickerInput = ({ label, bases, selectedValue, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={styles.picker}
          itemStyle={styles.pickerItem}
        >
          {bases.map((base) => (
            <Picker.Item key={base.value} label={base.label} value={base.value} />
          ))}
        </Picker>
      </View>
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
  pickerWrapper: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
  },
  pickerItem: {
    fontSize: 16,
  },
});

export default PickerInput;