const Greeter = require('./greeter')
const DateService = require('./dateService');

const mockGetCurrentTime = jest.fn().mockReturnValue(new Date('27-Mar-2022 14:00:00'))
jest.mock('./dateService', () => {
    return jest.fn().mockImplementation(() => {
        return { //object returned when a call to 'new DateService()' is made
            getCurrent : mockGetCurrentTime
        }
    })
});

describe("Greeter - Afternoon", () => {
    beforeEach(() => {
        DateService.mockClear()
        mockGetCurrentTime.mockClear()
    });

    it('Should greet with "Good Afternoon" when greeted after 12', () => {
    
        const sut = new Greeter(),
            userName = 'Magesh',
            expectedResult = `Hi Magesh, Good Afternoon`;

        //Act
        const actualResult = sut.greet(userName)

        //Assert
        //expect(DateService).toHaveBeenCalled()
        expect(actualResult).toBe(expectedResult)
        expect(mockGetCurrentTime).toHaveBeenCalled()
        
        
        /* const mockDateService = DateService.mock.instances[0]
        
        expect(mockDateService.getCurrent).toHaveBeenCalled() */
    })
})