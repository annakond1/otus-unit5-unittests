import { nameIsValid, fullTrim, getTotal } from '../src/app.js'

describe('nameIsVa', () => {
  it('тест функции nameIsVa (значения name)', () => {
    expect(nameIsValid('Damin')).toBe(false)
  })
})
describe('nameIsVa', () => {
  it('тест функции nameIsVa (значения name)', () => {
    expect(nameIsValid('damin')).toBe(true)
  })
})
describe('nameIsVa', () => {
  it('тест функции nameIsVa (значения name)', () => {
    expect(nameIsValid('damir damir')).toBe(false)
  })
})
describe('nameIsVa', () => {
  it('тест функции nameIsVa (значения name)', () => {
    expect(nameIsValid('d')).toBe(false)
  })
})
describe('nameIsVa', () => {
  it('тест функции nameIsVa (значения name)', () => {
    expect(nameIsValid(123)).toBe(false)
  })
})

describe('fullTrim', () => {
  it('тест функции fullTrim (удаление пробелов из строки)', () => {
    expect(fullTrim('Damir Rysaev')).toBe('DamirRysaev')
  })
})
describe('fullTrim', () => {
  it('тест функции fullTrim (удаление пробелов из строки)', () => {
    expect(fullTrim('  Damir  ')).toBe('Damir')
  })
})
describe('fullTrim', () => {
  it('тест функции fullTrim (удаление пробелов из строки)', () => {
    expect(fullTrim('Damir - # 1')).toBe('Damir-#1')
  })
})
describe('fullTrim', () => {
  it('тест функции fullTrim (удаление пробелов из строки)', () => {
    expect(fullTrim(' D A M I R ')).toBe('DAMIR')
  })
})
describe('fullTrim', () => {
  it('тест функции fullTrim (удаление пробелов из строки)', () => {
    expect(fullTrim(' ')).toBe('')
  })
})

describe('getTotal', () => {
  it('тест функции getTotal (подсчёт суммы заказа)', () => {
    expect(getTotal([{ price: 10, quantity: 10 }])).toBe(100)
  })
})
describe('getTotal', () => {
  it('тест функции getTotal (подсчёт суммы заказа)', () => {
    expect(getTotal([{ price: 10, quantity: 1 }, { price: 10, quantity: 9 }])).toBe(100)
  })
})
describe('getTotal', () => {
  it('тест функции getTotal (подсчёт суммы заказа)', () => {
    expect(getTotal([], 0)).toBe(0)
  })
})

describe('getTotal', () => {
  it('тест функции getTotal 10*10/100 = 0', () => {
    expect(getTotal([10, 10], 100)).toBe(0)
  })
})

describe('getTotal', () => {
  it('тест функции getTotal (подсчёт суммы заказа)', () => {
    expect(() => {
      getTotal([10, 10], '0')
    }).toThrow('Скидка должна быть числом')
  })
})
describe('getTotal', () => {
  it('тест функции getTotal (подсчёт суммы заказа) скидка >100', () => {
    expect(() => {
      getTotal([10, 10], 101)
    }).toThrow('Процент скидки должен быть от 0 до 99')
  })
})

describe('параметризированный тест функции nameIsVa', () => {
const data = [
  {
    name: 'damir',
    expected: true
  }
]
  test.each(data)('тест параметризированный true',
    ({name, expected}) => {
      expect(nameIsValid(name)).toBe(expected)
    })
})

describe('параметризированный тест функции getTotal', ()) => {
  const testPositive = [
    {
      total: [10, 10], 100,
      expected: 0
    },
  ]
    test.each(testPositive)('тест параметризированный для функции getTotal',
      ({total, expected}) => {
        expect(getTotal(total)).toBe(expected);
      })
    }


//describe('getTotal', () => {
  //test.each([
      //[null, null, 'Скидка должна быть числом'],
      //[undefined, false],
      //['AXON', false],
      //['2021-31-31', false],
      //['2021-12-12', false],
    //  [10, 10, 100],
  //])('given input date %p , it should return %p ', (input, expected) => {
    //  expect(getTotal([{ price: 10, quantity: 10 }])).toEqual(expected);
  //});
//});
