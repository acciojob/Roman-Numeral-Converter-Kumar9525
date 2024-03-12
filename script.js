function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let romanNumeral = '';

  // Loop through the symbols in descending order
  for (let i = 0; i < Object.keys(obj).length; i++) {
    const symbol = obj[i][0];
    const value = obj[i][1];

    // Repeat the symbol as many times as possible
    while (num >= value) {
      romanNumeral += symbol;
      num -= value;
    }

    // Check for subtraction cases (e.g., IV, IX, XL, XC, etc.)
    if (i % 2 === 0 && i < Object.keys(obj).length - 2) {
      const nextSymbol = obj[i + 2][0];
      const nextValue = obj[i + 2][1];

      const subtractionValue = value - nextValue;

      if (num >= subtractionValue) {
        romanNumeral += nextSymbol + symbol;
        num -= subtractionValue;
      }
    }
  }

  return romanNumeral;
}

// do not edit below this line
module.exports = convertToRoman;
