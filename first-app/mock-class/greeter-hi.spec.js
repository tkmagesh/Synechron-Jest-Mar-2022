const Greeter = require('./greeter')
const DateService = require('./dateService');
jest.mock('./dateService')

describe("Greeter", () => {

    it('Should respond with Hi when requested', () => {
        //Arrange
        const sut = new Greeter()
        
        //Act
        const response = sut.sayHi()

        //Assert
        expect(response).toBe('Hi')
        expect(DateService).toHaveBeenCalled();
        
    })
    

    
})