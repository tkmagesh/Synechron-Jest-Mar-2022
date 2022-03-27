const { addSync, addAsyncCallback, addAsyncPromise } = require('./async-demos')

describe('Async Demos', () => {
    describe('AddSync', () => {
        it('should be able to add 2 numbers', () => {
            const result = addSync(100,200)
            expect(result).toBe(300)
        })
    })

    describe('AddAsyncCallback', () => {
        it('should be able to add 2 numbers', (done) => {
            //Arrange
            const n1 = 100,
                n2 = 200,
                expectedResult = 300;

            //Act
            addAsyncCallback(n1,n2, result => {
                //Assert
                expect(result).toBe(expectedResult)
                done()
            });
            
        });
    })

    describe('AddAsyncPromise', () => {
        it('should be able to add 2 numbers [using done]', (done) => {
            //Arrange
            const n1 = 100,
                n2 = 200,
                expectedResult = 300;

            //Act
            const p = addAsyncPromise(n1, n2);

            p.then(result => {
                expect(result).toBe(expectedResult)
                done()
            });
        });

        it('should be able to add 2 numbers [using async await]', async () => {
            //Arrange
            const n1 = 100,
                n2 = 200,
                expectedResult = 300;

            //Act
            const result = await addAsyncPromise(n1, n2);
            expect(result).toBe(expectedResult)

        });

        it('should be able to add 2 numbers [using multiple async operations] [using done]', (done) => {
            //Arrange
            const n1 = 100,
                n2 = 200,
                expectedResult = 300;

            //Act
            /* 
            const result1 = await addAsyncPromise(n1, n2);
            const result2 = await addAsyncPromise(n1, n2); 
            */

            //execution in sequence - result in a timeout
           /* 
            addAsyncPromise(n1, n2)
                .then(result1 => {
                    addAsyncPromise(n1, n2)
                        .then(result2 => {
                            expect(result1).toBe(expectedResult)
                            expect(result2).toBe(expectedResult)
                            done()
                        })
                }) 
            */

            const p1 = addAsyncPromise(n1,n2)
            const p2 = addAsyncPromise(n1,n2)
            Promise
                .all([p1, p2])
                .then(results => {
                    const result1 = results[0],
                        result2 = results[1];

                    expect(result1).toBe(expectedResult)
                    expect(result2).toBe(expectedResult)
                    done()
                })
                
        });

        it('should be able to add 2 numbers [using multiple async operations] [using async await]', async () => {
            //Arrange
            const n1 = 100,
                n2 = 200,
                expectedResult = 300;

            //Act
           
            const p1 = addAsyncPromise(n1,n2)
            const p2 = addAsyncPromise(n1,n2)
            const [result1, result2] = await Promise.all([p1, p2]);
            expect(result1).toBe(expectedResult)
            expect(result2).toBe(expectedResult)
                
        });
    })
})