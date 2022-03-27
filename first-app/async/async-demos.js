

function addSync(x,y){
    
    const result = x + y
    
    return result
}

function addAsyncCallback(x,y, callback){
    
    setTimeout(() => {
        const result = x + y
        
        callback(result)
    }, 3000)
}

function addAsyncPromise(x,y, callback){
    
    const p = new Promise((resolveFn, rejectFn) => {
        setTimeout(() => {
            const result = x + y
    
            resolveFn(result)
        }, 3000)
    })
    return p;
}

module.exports = { addSync, addAsyncCallback, addAsyncPromise }