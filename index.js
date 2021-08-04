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
user.name = "maul"
// ? #2
// user["name"] = "gove"
// ? cara menambahkan property
// user.role = "admin"
// user["role"] = "Admin"
user.run()

// console.log(user)
let user2 = new Object()
