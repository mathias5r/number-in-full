
const negative = 'menos';
const units = ['zero','um','dois','três','quatro','cinco','seis','sete','oito','nove'];
const lessThan20 = ['','onze','doze','treze','quatorze','quinze','dezesseis','dezessete','dezoito','dezenove']
const dozens = ['','dez','vinte','trinta','quarenta','cinquenta','sessenta','setenta','oitenta','noventa'];
const hundreds = ['','cento','duzentos','trezentos','quatrocentos','quinhentos','seiscentos','setecentos','oitocentos','novecentos'] 

export const getUnits = (firstOrder, secondOrder) => {

  if(!secondOrder && !firstOrder){
    return '';
  }

  if(!secondOrder && firstOrder){
    return units[firstOrder];
  }  

  if(secondOrder && !firstOrder){
    return dozens[secondOrder];
  }  

  if(secondOrder === 1){
    return lessThan20[firstOrder];
  }

  return  dozens[secondOrder] + ' e ' + units[firstOrder];
}

export const getHundreds = (firstOrder, secondOrder, thirdOrder) => {
  if(!thirdOrder){
    return '';
  }

  if(thirdOrder === 1 && !secondOrder && !firstOrder){
    return 'cem';
  }

  return hundreds[thirdOrder];
}

export const getNumberInFull = number => {
  const result = [];
  const digits = number.split('').reverse();

  if(digits[digits.length -1] === '-'){
    result.push('menos ');
    digits.pop();
  }

  const numbers = digits.map(digit => Number(digit));

  if(numbers.reduce((total, number) => total + number) === 0){
    return 'zero'
  }

  const firstClass = getUnits(numbers[3], numbers[4]);
  const hundreds = getHundreds(numbers[0], numbers[1], numbers[2]);
  const secondClass = getUnits(numbers[0], numbers[1]);

  if(firstClass){
    result.push(firstClass);
    result.push(' mil');
  }

  if(hundreds && firstClass){
    result.push(' e ');
  }

  result.push(hundreds);

  if(secondClass && (firstClass || hundreds)){
    result.push(' e ');
  }

  result.push(secondClass);

  return result.join('')
}
