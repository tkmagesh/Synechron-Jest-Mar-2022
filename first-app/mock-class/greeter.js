const DateService = require('./dateService')
class Greeter{
    constructor(){
        this.dateService = new DateService()
    }
    greet(name) {
        const currentDate = this.dateService.getCurrent()
        if (currentDate.getHours() < 12){
            return `Hi ${name}, Good Morning`
        } else {
            return `Hi ${name}, Good Afternoon`
        }
    }
    sayHi(){
         const currentDate = this.dateService.getCurrent()
         return "Hi"
    }
}

module.exports = Greeter