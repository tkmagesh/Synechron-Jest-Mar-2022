class Greeter{
    constructor(dateService){
        this.dateService = dateService;
    }
    greet(name) {
        const currentDate = this.dateService.getCurrent()
        if (currentDate.getHours() < 12){
            return `Hi ${name}, Good Morning`
        } else {
            return `Hi ${name}, Good Afternoon`
        }
    }
}

module.exports = Greeter