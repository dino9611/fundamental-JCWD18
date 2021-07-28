// var hasil = !(5 >= 5 || 1 == 0) && 5 < 6
// var hasil = 5 === parseInt('5')
// var input = 1.1
// yang true itu adalah range 1-10, diluar itu false
// input harus lebih dari 0 dan input kurang dari 11 
// var hasil = input >= 1 && input <= 10

// console.log(hasil)

// var input = 2
// yang true itu adalah range 1-10, diluar itu false
// input harus lebih dari 0 dan input kurang dari 11 
// var hasil = input >= 1 && input <= 10

// if (input >= 1 && input <= 10) {
//     console.log('masuk dalam range')
// }
// var kata
// var age = 40

// if (age >= 18) {
//     console.log('kirim email')
// } else if (age > 50) {
//     kata = 2
//     console.log('masuk ke 50')
// }
// console.log(kata)

// if (age < 18) {
//     console.log('harus 18 keatas kalo mau daftar')
// } else {
//     console.log('ketuaan')
// }


// var age = 40

// if (age >= 18) {
//     console.log('kirim email')
// } else {
//     console.log('kirim email rejection karena dibawah 18 tahun')
// }


var nilai = 2
var grade
if (nilai >= 85 && nilai <= 100) {
    grade = 'A'
} else if (nilai >= 75 && nilai < 85) {
    grade = 'B'
} else if (nilai >= 60 && nilai < 75) {
    grade = 'C'
} else if (nilai >= 0 && nilai < 60) {
    grade = 'D'
} else {
    grade = 'E'
}
// console.log(grade)
// var pekerjaan = 'sopir'
// switch (pekerjaan) {
//     case 'sopir':
//         console.log('kerjaannya bawa mobil')
//         break
//     case 'penjahit':
//         console.log('pekerjaannya jahit')
//         break
//     default:
//         console.log('yang penting kerja')
//         break
// }


//? switch yang diatas sama saja dengan if yang dibawah

// if (pekerjaan == 'sopir') {
//     console.log('kerjaannya bawa mobil')
// } else if (pekerjaan == 'penjahit') {
//     console.log('pekerjaannya jahit')
// } else {
//     console.log('yang penting kerja')
// }

var val = -1
var val1 = 1
console.log(isNaN(val1))

if (val1) {
    console.log('masuk if')
} else {
    console.log('masuk else')
}



