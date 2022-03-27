

function addSync(x,y){
    
    const result = x + y
    
    return result
}

function addAsyncCallback(x,y, callback){
    
    setTimeout(() => {
        const result = x + y
        
        callback(result)
    }, 500)
}

function addAsyncPromise(x,y, callback){
    
    const p = new Promise((resolveFn, rejectFn) => {
        setTimeout(() => {
            const result = x + y
            resolveFn(result)
        }, 500)
    })
    return p;
}

module.exports = { addSync, addAsyncCallback, addAsyncPromise }