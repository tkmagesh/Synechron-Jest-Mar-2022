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
})