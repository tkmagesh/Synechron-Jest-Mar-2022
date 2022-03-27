const Greeter = require('./greeter')
const DateService = require('./dateService');

jest.mock('./dateService', () => {
    return jest.fn().mockImplementation(() => {
        return {
            getCurrent : () => { 
                return new Date('27-Mar-2022 14:00:00')
            }
        }
    })
})

describe("Greeter", () => {
    it('Should greet with "Good Afternoon" when greeted after 12', () => {
        
        const sut = new Greeter(),
            userName = 'Magesh',
            expectedResult = `Hi Magesh, Good Afternoon`;

        //Act
        const actualResult = sut.greet(userName)

        //Assert
        expect(actualResult).toBe(expectedResult)
        //expect(afterNoonDateService.getCurrent).toHaveBeenCalled()
    })

    xit('Should greet with "Good Morning" when greeted before 12', () => {
       
        const sut = new Greeter(),
            userName = 'Magesh',
            expectedResult = `Hi Magesh, Good Morning`;

        //Act
        const actualResult = sut.greet(userName)

        //Assert
        expect(actualResult).toBe(expectedResult)
        expect(morningDateService.getCurrent).toHaveBeenCalled()
    })
})