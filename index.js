const user = {
    name: "dino",
    username: "dn001",
    password: "password",
    isVerified: false,
    gender: 'male',
    run() {
        console.log(this.name + ' run')
    }
}
// const user2 = {
//     name: "dino",
//     username: "dn001",
//     password: "password",
//     isVerified: false,
//     gender: 'male',
//     run() {
//         console.log(this.name + ' run')
//     }
// }

// ? cara pertama untuk manggil property dari sebuah object
// var prop = 'name'
// console.log(user)
// console.log(user.username)
// ? cara kedua untuk manggil property dari sebuah object
// var prop = 'gender'
// console.log(user[prop])
// console.log(user["username"])
// user["run"]()
// ? cara mengganti isi property
// ? #1
// user.name = "maul"
// ? #2
// user["name"] = "gove"
// ? cara menambahkan property
// user.role = "admin"
// user["role"] = "Admin"
// user.run()

// console.log(user)
// let user2 = new Object()

class User {
    constructor(_username, _password, _isVerified) {
        this.username = _username
        this.password = _password
        this.isVerified = _isVerified
        this.role = 'user'
    }

    run = () => {
        console.log(this.username + ' run')
    }
}

var user1 = new User('dn002', 'pass', true)
// console.log(user1)
// user1.run()
var user2 = new User('dn003', 'pass3', false)
// console.log(user2)



// class Human {
//     constructor(name, age, working) {
//         this.name = name
//         this.age = age
//         this.alive = true
//         this.working = true
//     }

//     eat = () => {
//         console.log('eating')
//     }
//     breed = () => {
//         console.log('breed')
//     }
//     work = () => {
//         console.log('work')
//     }
// }
// class Animal {
//     constructor(name, age, fly) {
//         this.name = name
//         this.age = age
//         this.alive = true
//         this.fly = fly
//     }

//     eat = () => {
//         console.log('eating')
//     }
//     breed = () => {
//         console.log('breed')
//     }
//     hunt = () => {
//         console.log('hunt')
//     }
// }

// class Plant {
//     constructor(name, age, color) {
//         this.name = name
//         this.age = age
//         this.alive = true
//         this.color = color
//     }

//     eat = () => {
//         console.log('eating')
//     }
//     breed = () => {
//         console.log('breed')
//     }
//     photo = () => {
//         console.log('photosynthesis')
//     }
// }

class LivingThings {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.alive = true

    }
    eat = () => {
        console.log('eating')
    }
    breed = () => {
        console.log('breed')
    }
}

class Human extends LivingThings {
    constructor(name, age, working) {
        super(name, age)
        this.working = working
    }

    work = () => {
        console.log('work')
    }

}
class Animal extends LivingThings {
    constructor(name, age, fly) {
        super(name, age)
        this.fly = fly
    }

    hunt = () => {
        console.log('hunt')
    }

}
class Plant extends LivingThings {
    constructor(name, age, color) {
        super(name, age)
        this.color = color
    }

    // static flower() {

    // }

    photo = () => {

        console.log('photosynthesis')
    }
}

var human = new Human('dino', 24, true)
var animal1 = new Animal('tiger', 5, false)
var animal2 = new Animal('cheetah', 5, false)
// var plant1 = new Plant('rose', 5, 'red')

// Plant.flower()
// animal1.hunt()
console.log(human.age)
console.log(animal1.name)


