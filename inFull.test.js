import { getUnits, getHundreds, getNumberInFull } from './inFull';

describe('getUnits', () => {
  test('with 00', () => {
    const number = getUnits(0,0);
    expect(number).toBe('');
  })
  test('with 1', () => {
    const number = getUnits(1,0);
    expect(number).toBe('um');
  })
  test('with 9', () => {
    const number = getUnits(9,0);
    expect(number).toBe('nove');
  })
  test('with 10', () => {
    const number = getUnits(0,1);
    expect(number).toBe('dez');
  })
  test('with 11', () => {
    const number = getUnits(1,1);
    expect(number).toBe('onze');
  })
  test('with 19', () => {
    const number = getUnits(9,1);
    expect(number).toBe('dezenove');
  })
  test('with 25', () => {
    const number = getUnits(5,2);
    expect(number).toBe('vinte e cinco');
  })
  test('with 99', () => {
    const number = getUnits(9,9);
    expect(number).toBe('noventa e nove');
  })
  test('with 50', () => {
    const number = getUnits(0,5);
    expect(number).toBe('cinquenta');
  })
  test('with 21', () => {
    const number = getUnits(1,2);
    expect(number).toBe('vinte e um');
  })
})

describe('getHundreds', () => {
  test('with 0', () => {
    const number = getHundreds(0,0,0);
    expect(number).toBe('');
  })
  test('with 100', () => {
    const number = getHundreds(0,0,1);
    expect(number).toBe('cem');
  })
  test('with 101', () => {
    const number = getHundreds(1,0,1);
    expect(number).toBe('cento');
  })
  test('with 110', () => {
    const number = getHundreds(0,1,1);
    expect(number).toBe('cento');
  })
  test('with 111', () => {
    const number = getHundreds(1,1,1);
    expect(number).toBe('cento');
  })
  test('with 500', () => {
    const number = getHundreds(0,0,5);
    expect(number).toBe('quinhentos');
  })
  test('with 501', () => {
    const number = getHundreds(1,0,5);
    expect(number).toBe('quinhentos');
  })
  test('with 511', () => {
    const number = getHundreds(0,0,5);
    expect(number).toBe('quinhentos');
  })
})

describe('getNumberInFull', () => {
  test('with 0', () => {
    const number = getNumberInFull('0');
    expect(number).toBe('zero');
  })
  test('with 1', () => {
    const number = getNumberInFull('1');
    expect(number).toBe('um');
  })
  test('with -1', () => {
    const number = getNumberInFull('-1');
    expect(number).toBe('menos um');
  })
  test('with 10', () => {
    const number = getNumberInFull('10');
    expect(number).toBe('dez');
  })
  test('with -10', () => {
    const number = getNumberInFull('-10');
    expect(number).toBe('menos dez');
  })
  test('with 11', () => {
    const number = getNumberInFull('11');
    expect(number).toBe('onze');
  })
  test('with 20', () => {
    const number = getNumberInFull('20');
    expect(number).toBe('vinte');
  })
  test('with 20', () => {
    const number = getNumberInFull('23');
    expect(number).toBe('vinte e três');
  })
  test('with 100', () => {
    const number = getNumberInFull('100');
    expect(number).toBe('cem');
  })
  test('with -100', () => {
    const number = getNumberInFull('-100');
    expect(number).toBe('menos cem');
  })
  test('with 101', () => {
    const number = getNumberInFull('101');
    expect(number).toBe('cento e um');
  })
  test('with 110', () => {
    const number = getNumberInFull('110');
    expect(number).toBe('cento e dez');
  })
  test('with 110', () => {
    const number = getNumberInFull('111');
    expect(number).toBe('cento e onze');
  })
  test('with 110', () => {
    const number = getNumberInFull('200');
    expect(number).toBe('duzentos');
  })
  test('with 1000', () => {
    const number = getNumberInFull('1000');
    expect(number).toBe('um mil');
  })
  test('with -1000', () => {
    const number = getNumberInFull('-1000');
    expect(number).toBe('menos um mil');
  })
  test('with 1001', () => {
    const number = getNumberInFull('1001');
    expect(number).toBe('um mil e um');
  })
  test('with 1011', () => {
    const number = getNumberInFull('1011');
    expect(number).toBe('um mil e onze');
  })
  test('with 1111', () => {
    const number = getNumberInFull('1111');
    expect(number).toBe('um mil e cento e onze');
  })
  test('with 10000', () => {
    const number = getNumberInFull('10000');
    expect(number).toBe('dez mil');
  })
  test('with -10000', () => {
    const number = getNumberInFull('-10000');
    expect(number).toBe('menos dez mil');
  })
  test('with 10001', () => {
    const number = getNumberInFull('10001');
    expect(number).toBe('dez mil e um');
  })
  test('with 10001', () => {
    const number = getNumberInFull('54367');
    expect(number).toBe('cinquenta e quatro mil e trezentos e sessenta e sete');
  })
  test('with 99999', () => {
    const number = getNumberInFull('99999');
    expect(number).toBe('noventa e nove mil e novecentos e noventa e nove');
  })
  test('with -99999', () => {
    const number = getNumberInFull('-99999');
    expect(number).toBe('menos noventa e nove mil e novecentos e noventa e nove');
  })
})