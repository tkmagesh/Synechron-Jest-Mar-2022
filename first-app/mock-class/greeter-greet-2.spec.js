const Greeter = require('./greeter')
const DateService = require('./dateService');
jest.mock('./dateService');

describe("Greeter", () => {

    describe('Greeter - Afternoon', () => {
        beforeEach(() => {
            DateService.mockImplementationOnce(() => {
                return { //object returned when a call to 'new DateService()' is made
                    getCurrent : jest.fn().mockReturnValue(new Date('27-Mar-2022 14:00:00'))
                }
            })
        })
        it('Should greet with "Good Afternoon" when greeted after 12', () => {
        
            const sut = new Greeter(),
                userName = 'Magesh',
                expectedResult = `Hi Magesh, Good Afternoon`;

            //Act
            const actualResult = sut.greet(userName)

            //Assert
            expect(DateService).toHaveBeenCalled()
            expect(actualResult).toBe(expectedResult)
            
            /* const mockDateService = DateService.mock.instances[0]
            
            expect(mockDateService.getCurrent).toHaveBeenCalled() */
        })

    })
    
     describe('Greeter - Morning', () => {
        beforeAll(() => {
             DateService.mockImplementation(() => {
                return {
                    getCurrent : () => { 
                        return new Date('27-Mar-2022 9:00:00')
                    }
                }
            })
        })
        it('Should greet with "Good Morning" when greeted at 9', () => {
            
            const sut = new Greeter(),
                userName = 'Magesh',
                expectedResult = `Hi Magesh, Good Morning`;

            //Act
            const actualResult = sut.greet(userName)

            //Assert
            expect(actualResult).toBe(expectedResult)
            expect(DateService).toHaveBeenCalled()
        })

        it('Should greet with "Good Morning" when greeted before 12', () => {
        
            const sut = new Greeter(),
                userName = 'Magesh',
                expectedResult = `Hi Magesh, Good Morning`;

            //Act
            const actualResult = sut.greet(userName)

            //Assert
            expect(actualResult).toBe(expectedResult)
            expect(DateService).toHaveBeenCalled()
        })
     })
})