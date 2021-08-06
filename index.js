let props = 'password'


let obj = { name: 'dino', [props]: 'pass' }

// let password = obj.password
// let name = obj.name
// obj.name = 'dinooo'
// spread Operator di object
// bisa untuk nambahin, edit , dan menggabungkan object
let obj1 = { role: "user", isverified: true }
obj = { ...obj, name: 'dino00', ...obj1 }
//? destructuring
let { password, name } = obj

// console.log(password)
// console.log(name)
// console.log(obj)

// ? destructuring array
// var arr = [1, 2]
// let one = arr[0]
// let [, tow] = arr
// console.log(onesss)
// console.log(tow)

// let angga = [
//     , {
//         gangsar: () => {
//             return {
//                 govar: 'zaky'
//             }
//         }
//     }
// ]
// const jazreel = () => {
//     return [
//         [, ,
//             {
//                 jeremmy: (bebas) => {
//                     return [bebas, 'kevin']
//                 }
//             }
//         ]
//     ]
// }

const maulana = () => {
    return () => {
        return {
            ragil: [
                [
                    ,
                    (bebas) => {
                        return {
                            putri: () => {
                                return {
                                    name1: bebas,
                                    name2: 'reeece'
                                }
                            }
                        }
                    }
                ]
            ]
        }
    }
}


// var hasil = angga[1].gangsar().govar
// var hasil = jazreel()[0][2]["jeremmy"]('katherine')
var hasil = maulana()()['ragil'][0][1]('ravi')['putri']()

console.log(hasil) // {name1:ravi,name2:reeece}


