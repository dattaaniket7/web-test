const user = {
    name: "oldMonk",
    regularFunction: function () {
        console.log(this.name)
    },
    arrowFunction: () => {
        console.log(this.name)
    },
}

user.regularFunction()
user.arrowFunction()