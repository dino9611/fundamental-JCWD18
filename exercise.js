// map 

var arr = [1, 3, 4, 5]
var newArr = arr.map((val) => {
    if (val % 2 == 0) {
        return 'even'
    } else {
        return 'odd'
    }
    // ? if ternary
    // var hasil = val % 2 == 0 ? "even" : "odd"
    // return hasil
})

console.log(newArr)

var gaji = [9.1e6, 9.8e6, 9.5e6, 10.3e6, 9.3e6]

var newGaji = gaji.filter((val) => {
    var gajiDikurangin = val - (val * 5 / 100)
    return gajiDikurangin >= 9e6
})

// console.log(newGaji)

// rata - rata = total / jumlah data
var inputArr = [1, 2, 3, 2, 5, 2, 7, 2]
const mean = (arr) => {
    let total = 0
    arr.forEach(val => {
        total += val
    });
    let output = total / arr.length
    return output

}
console.log(mean(inputArr))
const median = (arr) => {
    arr = arr.sort((a, b) => a - b)
    if (arr.length % 2 == 0) {
        let indexTengah1 = arr.length / 2 - 1
        let indexTengah2 = arr.length / 2
        return (arr[indexTengah1] + arr[indexTengah2]) / 2
    } else {
        let indexTengah = (arr.length - 1) / 2
        return arr[indexTengah]
    }
}
console.log(median(inputArr))
// urutin kecil besar
// cek jumlahnya 
// kalo genap maka
// angka tengahnya ada 2 dan dibagi 2
//  kalo ganjil ada 1 saja

// console.log('12s'.split(''))

// kata di lowercase
// kata di duplikasi lalu di convert ke array biar bisa dibalik
// baru dijoin lagi
// kalo sama dengan kata awal maka true
// kalo nggak false

const palindrome = (kata) => {
    kata = kata.toLowerCase()
    kata = kata.replace(/[^a-zA-Z0-9]/g, '') // ?replace igoner character dengan string kosong

    var kataBalik = kata.split('')
    kataBalik.reverse()
    kataBalik = kataBalik.join('')
    // var kataBalik = kata.split('').reverse().join('')
    // console.log(kataBalik)
    // console.log(kataBalik)
    if (kata === kataBalik) {
        return true
    } else {
        return false
    }
}
// var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
// // console.log(alpha.indexOf('Y')
// var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase().split('')
// console.log('ABC'.charCodeAt(0))
console.log(palindrome('Asa'))
console.log(palindrome('Katak'))
console.log(palindrome('kasur rusak'))
console.log(palindrome('Madam, I’m Adam'))

//  split kalimat berdasarkan spasi
//  lalu tiap kata displit dan direverse lalu dijoin lagi
//  kata di join lagi

const reverseWord = (kalimat) => {
    var kalimatSplit = kalimat.split(' ')
    kalimatSplit = kalimatSplit.map((val) => {
        // var kataSplit = val.split('')
        return val.split('').reverse().join('')
    })
    return kalimatSplit.join(' ')
}

// console.log(reverseWord('Hai aku Joan Mir'))


var nilai = 50
var grade = nilai >= 80 ? 'A' : nilai < 80 && nilai >= 70 ? 'B' : 'C'
// console.log(grade)
// Sunday Six +2

// s index = 18 + 2 = 20
//  z =25 + 2 % 26   = 1 
//

const caesarChiper = (kata, numb) => {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('') // 26  string -> array
    let alphaBig = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('') //26 // string -> array
    kata = kata.split('')
    var output = ''
    for (let i = 0; i < kata.length; i++) {
        if (kata[i] === ' ') {
            output += ' '
            continue
        }
        let alphaIndex = -1
        alphaIndex = alpha.indexOf(kata[i]) // mencari index kata[i] di variable alpha
        if (alphaIndex >= 0) {
            alphaIndex = (alphaIndex + numb) % 26
            output += alpha[alphaIndex]
            continue
        }
        alphaIndex = alphaBig.indexOf(kata[i]) // mencari index kata[i] di variable alpha
        if (alphaIndex >= 0) {
            alphaIndex = (alphaIndex + numb) % 26
            output += alphaBig[alphaIndex]
        }
    }
    return output

}


console.log(caesarChiper('Sunday Six', 54))