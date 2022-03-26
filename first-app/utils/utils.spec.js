const utils = require('./utils')

const testData = [
    {no : 12, expectedResult : false},
    {no : 13, expectedResult : true},
    {no : 17, expectedResult : true},
    {no : 19, expectedResult : true},
]

/* 
describe.each(testData)('utils.isPrime - $no', ({no, expectedResult}) => {
    it(`should verify ${no} is ${expectedResult ? '' : 'not'} prime`, () => {
        
        //Act
        const actualResult = utils.isPrime(no)

        //Assert
        expect(actualResult).toBe(expectedResult)
    })
}) 
*/

describe('utils', () => {
    const testData = [
        {no : 12, expectedResult : false},
        {no : 13, expectedResult : true},
        {no : 17, expectedResult : true},
        {no : 19, expectedResult : true},
    ]
    it.each(testData)('should verify $no is prime', ({no, expectedResult}) => {
        //Act
        const actualResult = utils.isPrime(no)

        //Assert
        expect(actualResult).toBe(expectedResult)
    })
})

/* describe('utils', () => { 
    it('Should check 17 is prime', () => {
        //Arrange
        const no = 17,
            expectedResult = true;

        //Act
        const actualResult = utils.isPrime(no)

        //Assert
        expect(actualResult).toBe(expectedResult)
    })

    it('Should check 13 is prime', () => {
        //Arrange
        const no = 13,
            expectedResult = true;

        //Act
        const actualResult = utils.isPrime(no)

        //Assert
        expect(actualResult).toBe(expectedResult)
    })

    it('Should check 12 is not prime', () => {
        //Arrange
        const no = 12,
            expectedResult = false;

        //Act
        const actualResult = utils.isPrime(no)

        //Assert
        expect(actualResult).toBe(expectedResult)
    })
}) */

