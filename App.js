class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    describe() {
        console.log(`${this.name} is now a user on this website and his age is ${this.age}`)
    }
}

const user = new User("oldMonk", 7)

user.describe()