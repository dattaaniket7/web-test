function getUserDetails (date, interest) {
    console.log(`My name is ${this.name} and my age is ${this.age}, ${date}`)
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

getUserDetails.call(oldMonk, 1948, "Dark Rum")
getUserDetails.call(aniket)
