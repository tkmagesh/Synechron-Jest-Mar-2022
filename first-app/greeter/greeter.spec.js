const Greeter = require('./greeter')
const DateService = require('./dateService');


//Version 1.0
/* describe("Greeter", () => {
    it('Should greet with "Good Afternoon" when greeted after 12', () => {
        //Arrange
        const afterNoonDateService = {
            getCurrent(){
                return new Date('26-Mar-2022 14:00:00')
            }
        };
        const sut = new Greeter(afterNoonDateService),
            userName = 'Magesh',
            expectedResult = `Hi Magesh, Good Afternoon`;

        //Act
        const actualResult = sut.greet(userName)

        //Assert
        expect(actualResult).toBe(expectedResult)
    })

    it('Should greet with "Good Morning" when greeted before 12', () => {
        //Arrange
        const morningDateService = {
            getCurrent(){
                return new Date('26-Mar-2022 10:00:00')
            }
        };
        const sut = new Greeter(morningDateService),
            userName = 'Magesh',
            expectedResult = `Hi Magesh, Good Morning`;

        //Act
        const actualResult = sut.greet(userName)

        //Assert
        expect(actualResult).toBe(expectedResult)
    })
}) */

//Version 2.0
/* class MockDateService{
    constructor(currentDate){
        this.currentDate = currentDate
    }
    getCurrent(){
        return this.currentDate
    }
}

describe("Greeter", () => {
    it('Should greet with "Good Afternoon" when greeted after 12', () => {
        //Arrange
        const afterNoonDateService = new MockDateService(new Date('26-Mar-2022 14:00:00'))
        const sut = new Greeter(afterNoonDateService),
            userName = 'Magesh',
            expectedResult = `Hi Magesh, Good Afternoon`;

        //Act
        const actualResult = sut.greet(userName)

        //Assert
        expect(actualResult).toBe(expectedResult)
    })

    it('Should greet with "Good Morning" when greeted before 12', () => {
        //Arrange
        const morningDateService = new MockDateService(new Date('26-Mar-2022 10:00:00'))
        const sut = new Greeter(morningDateService),
            userName = 'Magesh',
            expectedResult = `Hi Magesh, Good Morning`;

        //Act
        const actualResult = sut.greet(userName)

        //Assert
        expect(actualResult).toBe(expectedResult)
    })
}) */


//Version 3.0 (Using jest.fn() mock)
/* 
describe("Mocking", () => {
     it("test - 1", () => {
        const fn = jest.fn(() => { return "Hi there" })
        //console.log(fn())
        expect(fn).toHaveBeenCalled()
    })
}) 
*/

describe("Greeter", () => {
    it('Should greet with "Good Afternoon" when greeted after 12', () => {
        //Arrange
        /* 
        const afterNoonDateService = {
            getCurrent : jest.fn(() => new Date('26-Mar-2022 14:00:00'))
        } 
        */

        const mockFn = jest.fn()
        mockFn.mockReturnValue(new Date('26-Mar-2022 14:00:00'))
        const afterNoonDateService = { getCurrent : mockFn }
        
        const sut = new Greeter(afterNoonDateService),
            userName = 'Magesh',
            expectedResult = `Hi Magesh, Good Afternoon`;

        //Act
        const actualResult = sut.greet(userName)

        //Assert
        expect(actualResult).toBe(expectedResult)
        expect(afterNoonDateService.getCurrent).toHaveBeenCalled()
    })

    it('Should greet with "Good Morning" when greeted before 12', () => {
        //Arrange
        const morningDateService = {
            getCurrent : jest.fn(() => new Date('26-Mar-2022 10:00:00'))
        };

        const sut = new Greeter(morningDateService),
            userName = 'Magesh',
            expectedResult = `Hi Magesh, Good Morning`;

        //Act
        const actualResult = sut.greet(userName)

        //Assert
        expect(actualResult).toBe(expectedResult)
        expect(morningDateService.getCurrent).toHaveBeenCalled()
    })

    describe('mocking', () => {
        it ('mock functions returns multiple values', () => {
            const mockFn = jest.fn()
            /* 
            mockFn.mockReturnValueOnce('value-1')
            mockFn.mockReturnValueOnce('value-2')
            mockFn.mockReturnValueOnce('value-3')
            mockFn.mockReturnValue('all time result') 
            */

            mockFn.mockReturnValueOnce('value-1')
                .mockReturnValueOnce('value-2')
                .mockReturnValueOnce('value-3')
                .mockReturnValue('all time result')

            expect(mockFn()).toBe('value-1')
            expect(mockFn()).toBe('value-2')
            expect(mockFn()).toBe('value-3')
            expect(mockFn()).toBe('all time result')
            expect(mockFn()).toBe('all time result')
            expect(mockFn()).toBe('all time result')
            expect(mockFn()).toBe('all time result')
        })

        it('mock functions asserting on inputs', () => {
            const mockFn = jest.fn();

            mockFn(10, 'a')
            mockFn(20, 'b')
            mockFn(30, 'c')

            
            expect(mockFn.mock.calls[0][0]).toBe(10)
            expect(mockFn.mock.calls[0][1]).toBe('a')
        })

        it('testing mocks', () => {
            const transform = function(values, transformFn){
                const result = [];
                for (let idx = 0; idx < values.length; idx++) {
                    result.push(transformFn(values[idx], idx))
                }
                return result
            }

            /* 
                when given a list of values and a transformFn, the transform should invoke the given transformFn with one value from the list at time and accumulate the result and return it.

            */

            

            const testData= [10,20,30,40],
                mockTransformFn = jest.fn()
                    .mockReturnValueOnce('a')
                    .mockReturnValueOnce('b')
                    .mockReturnValueOnce('c')
                    .mockReturnValueOnce('d'),
                expectedResult = ['a','b','c','d'];

            const actualResult = transform(testData, mockTransformFn)

            console.log(mockTransformFn.mock)
            console.log(actualResult)

            expect(mockTransformFn.mock.calls.length).toBe(testData.length)

            //first function call
            expect(mockTransformFn.mock.calls[0][0]).toBe(testData[0]) //first argument
            expect(mockTransformFn.mock.calls[0][1]).toBe(0) //second argument

            //second function call
            expect(mockTransformFn.mock.calls[1][0]).toBe(testData[1]) //first argument
            expect(mockTransformFn.mock.calls[1][1]).toBe(1) //second argument

            //third function call
            expect(mockTransformFn.mock.calls[2][0]).toBe(testData[2]) //first argument
            expect(mockTransformFn.mock.calls[2][1]).toBe(2) //second argument

            //fourth function call
            expect(mockTransformFn.mock.calls[3][0]).toBe(testData[3]) //first argument
            expect(mockTransformFn.mock.calls[3][1]).toBe(3) //second argument


        })
    })
})