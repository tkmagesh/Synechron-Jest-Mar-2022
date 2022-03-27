(() => {
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`)
        const result = x + y
        console.log(`   [@service] return result`)
        return result
    }

    function addSyncClient(x,y){
        console.log(`[@client] invoking the service`)
        const result = addSync(x,y)
        console.log(`[@client] result = ${result}`)
    }

    globalThis['addSyncClient'] = addSyncClient

    function addAsyncCallback(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`)
        setTimeout(() => {
            const result = x + y
            console.log(`   [@service] return result`)
            callback(result)
        }, 5000)
    }

    function addAsyncCallbackClient(x,y){
        console.log(`[@client] invoking the service`)
        addAsyncCallback(x,y, (result) => {
            console.log(`[@client] result = ${result}`)
        });
    }

    globalThis['addAsyncCallbackClient'] = addAsyncCallbackClient

    function addAsyncPromise(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`)
        const p = new Promise((resolveFn, rejectFn) => {
            setTimeout(() => {
                const result = x + y
                console.log(`   [@service] return result`)
                resolveFn(result)
            }, 5000)
        })
        return p;
    }

    /* 
    function addSyncClient(x,y){
        console.log(`[@client] invoking the service`)
        const result = addSync(x,y)
        console.log(`[@client] result = ${result}`)
    } 
    */

  /* function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`)
        var p = addAsyncPromise(100,200)
        p.then(result => {
            console.log(`[@client] result = ${result}`)
        })
    } */

    async function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`)
        var result = await addAsyncPromise(100,200)
        console.log(`[@client] result = ${result}`)
    }

    globalThis['addAsyncPromiseClient'] = addAsyncPromiseClient

})()