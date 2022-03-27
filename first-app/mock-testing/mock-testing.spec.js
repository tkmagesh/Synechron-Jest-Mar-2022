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

        //console.log(mockTransformFn.mock)
        //console.log(actualResult)

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

    function filter(list, callbackFn){
        var result = []
        for (let value of list){
            if (callbackFn(value)) {
                result.push(value)
            }
        }
        return result
    }

    it ('testing filter', () => {
        

        const testData = [3,1,4,2,5],
            mockCallback = jest.fn()
                .mockReturnValueOnce(true)
                .mockReturnValueOnce(false)
                .mockReturnValueOnce(true)
                .mockReturnValueOnce(false)
                .mockReturnValueOnce(true)
            expectedResult = [3,4,5];

        const actualResult = filter(testData, mockCallback)

        //verify the result
        expect(actualResult).toEqual(expectedResult)

        //verify the interaction
        //verifying the # of calls
        expect(mockCallback.mock.calls.length).toBe(5)

        //verifying the calls with appropriate arguments
        expect(mockCallback.mock.calls[0][0]).toBe(testData[0])
        expect(mockCallback.mock.calls[1][0]).toBe(testData[1])
        expect(mockCallback.mock.calls[2][0]).toBe(testData[2])
        expect(mockCallback.mock.calls[3][0]).toBe(testData[3])
        expect(mockCallback.mock.calls[4][0]).toBe(testData[4])

    })

    it('testing filter-1', () => {
        const testData = [
            {id : 3, name : 'chennai'},
            {id : 1, name : 'pune'},
            {id : 4, name : 'bangalore'},
            {id : 2, name : 'mumbai'},
            {id : 5, name : 'delhi'},
        ];

        function predicateFactory(city){
            return function(obj){
                return obj.name === city;
            }
        }
        const predicateForPune = predicateFactory('pune')
        const expectedResult = [{ id : 1, name : 'pune'}]
        const actualResult = filter(testData, predicateForPune)

        expect(actualResult).toEqual(expectedResult)
    })
})