// Todo
// variable
// conditional
// loop
// Array
// loop Array
// function
// method Array
// object
// var benda = Boolean('dasda')
// console.log(benda)
// callback adalah argument yang isinya sebuah function
// map
// loop array of object
// recursion
// const kalimat= (nama)=>{
//     return nama +' ke sekolah'
// }

// console.log(kalimat)


// console.log(kalimat('budi','andi','willy'))
// console.log(kalimat([{nama:'andi',kelas:1}]))

function forEachalala(arr,cb){
    // callback('dino',0)
    // const cb = (val,i)=>{
    //     console.log(`${i+1}. ${val}`)
    // }

    for(let i =0 ;i < arr.length;i++){
        cb(arr[i],i)
    }
}

let fruits = ['nanas','apel']

let number = ['2000','10000'] 

let kali2 = number.map((val)=>{
    return val*2
})

// let hasil = number.map((val)=>{
//     return val+ (val*(20/100))
// })
// let hasil = []
// for(let i =0 ;i<number.length;i++){
//     let angka = number[i]+(number[i]*(20/100))
//     hasil[i]=angka
// }
// let hasil = number.map((val)=>parseInt(val))
// let hasil = []
// for(let i =0 ;i<number.length;i++){
//     let angka = parseInt(number[i])
//     hasil[i]=angka
// }

// let hasil1 = number.map((val)=>{
//     return `Rp. ${val},00`
// })
// console.log(kali2)
// console.log(hasil)
// console.log(hasil1)


// forEachalala(fruits,(val,i)=>{
//     console.log(`${i+1}. ${val}`)
// })
// forEachalala(fruits,(val,i)=>{
//     console.log(`${val} ${i+1}.`)
// })
// forEachalala(fruits,(val)=>{
//     console.log(`${val}`)
// })
// fruits.forEach((val,i)=>{
//     console.log(`${i+1}. ${val}`)
// })

// var angka = 5 * 2 /2**2
// angka --
// // angka-=2
// console.log(angka)


var abc = 'Abc'.split('').reverse().join('')
// abc.reverse()
// abc.join('')
// console.log(abc)
class Product {
    constructor(_id, _name, _price, _stock, _category) {
        this.id = _id
        this.name = _name
        this.price = _price
        this.stock = _stock
        this.category = _category
    }
}
class Cart {
    constructor(_id, _name, _price, _category, _qty) {
        this.id = _id
        this.name = _name
        this.price = _price
        this.category = _category
        this.qty = _qty
    }
}



let categories = ['all', 'Fast food', 'electronic', 'cloth', 'fruits']

let products = [
    new Product(1579581080923, 'Noodle', 3500, 9, 1),
    new Product(1579581080924, 'TV', 4300000, 5, 2),
    new Product(1579581080925, 'hoodie', 200000, 4, 3),
    new Product(1579581080926, 'apel', 2000, 30, 4),
] // master data

for (let i =0 ;i <products.length;i++){
    // console.log(products[i].name)
}
// products.forEach((val)=>{
//     console.log(val)
// })
let newProd=products.filter((val)=>{
    return val.price<=1e5
})
// console.log(newProd)
let newCat=categories.filter((val)=>{
    return val.toLocaleLowerCase() =='fast food'.toLowerCase()
})
// console.log(newCat)
// for (let i =0 ;i <categories.length;i++){
//     console.log(categories[i])
// }
// function fibo(deretKe){
//     if(deretKe <=2){
//         return 1
//     }

//     return fibo(deretKe-1) + fibo(deretKe-2)
// }

// console.log(fibo(3))
// var arr = [1,2,3].includes(1) // true

const cekPassword =(password)=>{
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const angka = '0123456789'.split('')
    let adaAngka =false
    let adaHuruf = false
    let adaSelain = false
    // cek berapa character
    password = password.replace(' ','')
    if(password.length <6){
        return 'harus 6 character atau lebih'
    }
    for (let i = 0; i < password.length; i++) {
        const element = password[i];
        let ketemu = 0
        for (let j = 0; j < alphabet.length; j++) {
            if(element == alphabet[j].toLowerCase() ||element == alphabet[j].toUpperCase() ){
                adaHuruf =true
                ketemu++   
            }
        }
        for (let k = 0; k < angka.length; k++) {
            if(element === angka[k]){
                adaAngka = true
                ketemu++
            }
        }
        if (ketemu === 0){
            adaSelain=true
        }
    }
    var total = adaAngka +adaHuruf+adaSelain
    if(adaAngka && adaHuruf && adaSelain){
        return 'bisa lewat '+ total
    }else if(!adaHuruf){
        return 'harus ada hurufnya ' + total
    }else if(!adaAngka){ // !adaAngka sama dengan adaAngka ==false
        return 'harus ada angkanya ' + total
    }else if(adaSelain === false){ // bisa juga begini
        return 'harus ada selain huruf dan angka ' + total
    }
    

}
// nggak boleh pake regex
// cuma pake looping
// console.log(cekPassword('1234 s')) // harus 6 character
// console.log(cekPassword('abcdef')) // harus ada angkanya
// console.log(cekPassword('123456')) // harus ada hurufnya
// console.log(cekPassword('pa55word')) // bisa lewat
// console.log(cekPassword('p@55word')) // bisa lewat



console.log(fungsiku('kata')) // K Aa Ttt Aaaa