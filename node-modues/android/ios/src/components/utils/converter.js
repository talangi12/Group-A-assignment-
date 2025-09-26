export const convertNumber = (inputValue, inputBase, outputBase) => {
  try {
    const decimalValue = parseInt(inputValue, parseInt(inputBase));
    
    if (isNaN(decimalValue)) {
      return { result: '', error: `Invalid input for base ${inputBase}.` };
    }

    let convertedValue = decimalValue.toString(parseInt(outputBase));
    
    if (parseInt(outputBase) === 16) {
      convertedValue = convertedValue.toUpperCase();
    }
    
    return { result: convertedValue, error: null };
  } catch (e) {
    return { result: '', error: 'An unexpected error occurred.' };
  }
};