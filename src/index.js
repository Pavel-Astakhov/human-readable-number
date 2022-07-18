module.exports = function toReadable (number) {
    const fromOneToNine = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'   
      };
      
      const fromTenToNineteen = {    
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
      };
      
      const fromTwentyByHundred = {
        10: 'ten',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
      };
      
      if(number < 100){
      
        if(number < 10){
          return fromOneToNine[number];
        }
      
        if(number < 20){
          return fromTenToNineteen[number];
        }

        if(number % 10 === 0){
          return fromTwentyByHundred[number];
        }
      
        return fromTwentyByHundred[Math.floor(number / 10) * 10] + ' ' + fromOneToNine[number % 10];   
      }
      
      let result = fromOneToNine[Math.floor(number / 100)] + ' hundred';
      
      if(number % 100 === 0){
        return result;
      }
      
      if(number % 100 < 10){
        return result + ' ' + fromOneToNine[number % 100];
      }
      
      if(number % 100 < 20){
        return result + ' ' + fromTenToNineteen[number % 100];
      }
      
      if(number % 100 % 10 === 0){
        return result + ' ' + fromTwentyByHundred[Math.floor((number % 100) / 10) * 10];
      }
      
        return result + ' ' + fromTwentyByHundred[Math.floor((number % 100) / 10) * 10] + ' ' + fromOneToNine[(number % 100) % 10];   
}
