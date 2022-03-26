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
class MockDateService{
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
})