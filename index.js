// ? CallBack
// ! callBack adalah argument yang isinya function 
//a b cb disebut parameter dimana parameter ini sama seperti variable
// yang mana isinya nanti adalah argument
const tambahan = (a, b, cb) => {
    a = cb(a)
    b = cb(b)
    return a + b
}
// 2 , 5 , sama function
// let hasil = tambahan(-2, -5, (angka) => {
//     return Math.abs(angka)
// })
const bePostif = (angka) => {
    return Math.abs(angka)
}
let hasil = tambahan(-2, -5, bePostif)

// console.log(hasil)
// ? forEach
// let fruits = ['Apple', "Anggur", "Jeruk"]
var fruits = [
    {
        name: 'Apel',
        price: 10000,
        stock: 5
    },
    {
        price: 15000,
        stock: 6,
        name: 'Anggur'
    },
    {
        name: 'Jeruk',
        price: 20000,
        stock: 7
    },
]
// ? forEach adalah method yang digunaka untuk looping array
// ? callback nggak bisa di ada break dan punya return
// ? forEach itu tidak return apapun -> dengan void
// const forEachDuplicate = (arr, cb) => {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr)
//     }
// }
// forEachDuplicate(fruits, (val) => {
//     console.log(val)
// })

// fruits.push({ name: "mangga", price: 12000, stock: 3 })
// fruits.forEach(element => {
//     console.log(element)
// });
// ? Map
var fruits = [
    [
        'Apel',
        10000,
        5
    ],
    [
        'Anggur',
        15000,
        6,
    ],
    [
        'Jeruk',
        20000,
        7
    ],
]
// map itu dia return array baru
// callbacknya harus punya return 
// di looping sepanjang array dan tidak boleh ada break
// map itu gunanya biasanya jika ingin merubah bentuk value 
// dari isi sebuah array contoh
// [[appel,20000,5]] -> [{name:'apple',price:20000,stock:5}]
// [2,4,5] -> [4,6,7]
let newFruits = fruits.map((val) => {
    return { name: val[0], price: val[1], stock: val[2] }
})
// console.log(newFruits)
// console.log(fruits)
// const mapDuplicate = (arr, cb) => {
//     var newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         let newValue = cb(arr[i], i, arr)
//         newArr.push(newValue)
//     }
// }
// ?Filter
// filter gunanya memfilter array 
// filter akan menghasilkan array baru 
// value yang dimasukkan ke array baru jika value tersebut setelah di proses
// dicallback menghasilkan true jika false maka tidak dimasukkan
// callbacknya harus return boolean 
// !filter fruits yang stocknya diatas 5
var filterFruits = newFruits.filter((val) => {
    return val.stock > 5
})


// console.log(filterFruits)


var numb = [1, 2, 3, 2, 5, 2, 7, 2]

const mode = (arr) => {

    var maxCount = 0
    var angkaMode
    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++
            }
        }

        if (count > maxCount) {
            angkaMode = arr[i]
            maxCount = count
        }
    }
    return angkaMode
}

// console.log(mode(numb))

let months = [
    'januari',
    'februari',
    'maret',
    'april',
    'mei',
    'juni',
    'juli',
    'agustus',
    'september',
    'oktober',
    'november',
    'december'
]
let days = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu']

var date = new Date()
var tanggal = date.getDate()
var hari = days[date.getDay()]
var bulan = months[date.getMonth()]
var tahun = date.getFullYear()
var jam = date.getHours()
if (jam < 10) {
    jam = '0' + jam
}
var menit = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
var detik = date.getSeconds()

console.log(`hari ini ${hari},${tanggal} ${bulan} ${tahun}, pukul ${jam}:${menit}:${detik}`)