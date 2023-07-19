function getUserDetails () {
    console.log(`My name is ${this.name} and my age is ${this.age}`)
}

const oldMonk = {
    age: 7,
    name: "oldMonk",
    description: "Old Monk XXX 7 Years Old"
}

const aniket = {
    age: 23,
    name: "Aniket Datta",
    aboutMe: "I love Old Monk"
}

const oldMonkDetail = getUserDetails.bind(oldMonk)

oldMonkDetail()