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
            addAsyncCallback(100,200, result => {
                expect(result).toBe(300)
                done()
            });
            
        });
    })
})