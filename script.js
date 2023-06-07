// Configuração inicial números romanos
function romanToArabic(romanNumeral) {
    const romanDict = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
    let arabicNum = 0;
    let prevValue = 0;
  
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
      const char = romanNumeral[i];
      const currentValue = romanDict[char];
  
      if (currentValue >= prevValue) {
        arabicNum += currentValue;
      } else {
        arabicNum -= currentValue;
      }
  
      prevValue = currentValue;
    }
  
    return arabicNum;
  }
  
  // Função para conversao dos números para romanos
  function arabicToRoman(arabicNum) {
    const romanDict = {
      1000: 'M',
      900: 'CM',
      500: 'D',
      400: 'CD',
      100: 'C',
      90: 'XC',
      50: 'L',
      40: 'XL',
      10: 'X',
      9: 'IX',
      5: 'V',
      4: 'IV',
      1: 'I'
    };
    let romanNum = '';
  
    for (const [value, symbol] of Object.entries(romanDict)) {
      while (arabicNum >= value) {
        romanNum += symbol;
        arabicNum -= value;
      }
    }
  
    return romanNum;
  }
  
  // Chamada dos números romanos para números arábico
  function convertRomanToArabic() {
    const romanNumeral = document.getElementById('romanNumeral').value;
    const arabicNum = romanToArabic(romanNumeral);
  
    document.getElementById('arabicResult').innerHTML = `O número romano ${romanNumeral} em arábico é: ${arabicNum}`;
  }
  
  // Chamada dos números arábico para números romanos
  function convertArabicToRoman() {
    const arabicNum = parseInt(document.getElementById('arabicNum').value);
    const romanNumeral = arabicToRoman(arabicNum);
  
    document.getElementById('romanResult').innerHTML = `O número arábico ${arabicNum} em romano é: ${romanNumeral}`;
  }
  