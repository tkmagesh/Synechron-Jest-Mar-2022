const calculator = require('../calc');

test('first test', () => {
    expect(true).toBeTruthy()
})

describe('Calculator', () => {
    it('Should add 2 numbers', () => {
        //Arrange
        const x = 100,
            y = 200,
            expectedResult = 300

        //Act
        const result = calculator.add(x,y)

        //Assert
        expect(result).toBe(expectedResult)
    })
    it('Should subtract 2 numbers', () => {
        //Arrange
        const x = 100,
            y = 200,
            expectedResult = -100

        //Act
        const result = calculator.subtract(x,y)

        //Assert
        expect(result).toBe(expectedResult)
    })
    
    it('Should multiply 2 numbers', () => {
        //Arrange
        const x = 100,
            y = 200,
            expectedResult = 20000

        //Act
        const result = calculator.multiply(x,y)

        //Assert
        expect(result).toBe(expectedResult)
    })
})