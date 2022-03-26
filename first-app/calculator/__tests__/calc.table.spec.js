const calculator = require('../calc')

describe('Calculator [table driven]', () => {
  const testData = [
      { operation : 'add', data : [
          {n1 : 10, n2 : 20, expectedResult : 30},
          {n1 : 100, n2 : 200, expectedResult : 300},
          {n1 : 1000, n2 : 2000, expectedResult : 3000}
      ]},
      { operation : 'subtract', data : [
          {n1 : 10, n2 : 20, expectedResult : -10},
          {n1 : 100, n2 : 200, expectedResult : -100},
          {n1 : 1000, n2 : 2000, expectedResult : -1000}
      ]},
      { operation : 'multiply', data : [
          {n1 : 10, n2 : 20, expectedResult : 200},
          {n1 : 100, n2 : 200, expectedResult : 20000},
          {n1 : 1000, n2 : 2000, expectedResult : 2000000}
      ]},
      { operation : 'divide', data : [
          {n1 : 10, n2 : 20, expectedResult : 0.5},
          {n1 : 100, n2 : 200, expectedResult : 0.5},
          {n1 : 1000, n2 : 2000, expectedResult : 0.5}
      ]},
  ]  

  describe.each(testData)('calculator - $operation', ({operation, data}) => {
    it.each(data)(`should ${operation} ` + 'on $n1 and $n2', ({n1, n2, expectedResult}) => {
        let actualResult = 0
       /*  switch (operation) {
            case 'add':
                actualResult = calculator.add(n1, n2)
                break;
            case 'subtract':
                actualResult = calculator.subtract(n1, n2)
                break;
            case 'multiply':
                actualResult = calculator.multiply(n1, n2)
                break;
            case 'divide':
                actualResult = calculator.divide(n1, n2)
                break;
        
            default:
                break;
        } */
        actualResult = calculator[operation](n1, n2)
        expect(actualResult).toBe(expectedResult)
    })
  })
})