function isPrime(no){
    for (let i = 2; i <= (no/2); i++){
        if (no % i === 0 ){
            return false
        }
        return true
    }
}

module.exports = { isPrime }