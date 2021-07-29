// //? while loop
// var angka = 1 // 2 3 4 5 6
// while (angka <= 5) {
//     angka++

//     console.log(angka, "dalam looping")
// }

// console.log(angka, "bukan dalam looping")

// var angka = 1
// while (angka >= 1) {
//     console.log(angka, "dalam looping")
//     angka++
// }
// while (false) {
//     console.log(angka, "dalam looping")
//     angka++
// }

// console.log(angka, "bukan dalam looping")



// var angka = 1
// do {
//     console.log(angka, "dalam looping")
//     angka++
// } while (angka >= 5);

// console.log(angka, "bukan dalam looping")

// for (var angka = 1; angka <= 5; angka++) {
//     console.log(angka, "dalam looping")
// }

// console.log(angka, "bukan dalam looping")
// ? break bisa buat while dowhile sama for
// var angka = 1
// while (angka <= 5) {
//     console.log(angka, "dalam looping")
//     if (angka === 3) {
//         break
//     }
//     angka++
// }

// ? continue bisa buat while dowhile sama for
// var angka = 1
// while (angka <= 5) {
//     angka++
//     if (angka === 3) {
//         continue
//     }
//     console.log(angka, "dalam looping")
// }
// for (var angka = 1; angka <= 5; angka++) {
//     if (angka === 3) {
//         continue
//     }
//     console.log(angka, "dalam looping")
// }
// for (var angka = 1; angka <= 5; angka++) {

//     console.log(angka, "dalam looping")
// }

// var angka = 1
// var angka2 = ++angka


// console.log(angka2)
//? bintang vertical
// var stars = ''
// var jumlahBintang = 5
// stars += '*\n'
// stars += '*\n'
// stars += '*\n'
// stars += '*\n'
// stars += '*'
// for (let i = 0; i < jumlahBintang; i++) {
//     if (i === jumlahBintang - 1) {
//         stars += '*'
//     } else {
//         stars += '*\n'
//     }

// }
// // console.log('*\n*\n*\n*\n*\n')

// console.log(stars)
//? persegi
// var stars = ''
// var sisi = 5

// stars += '*'
// stars += '*'
// stars += "*"
// stars += '\n'
// stars += '*'
// stars += '*'
// stars += "*"
// stars += '\n'
// stars += '*'
// stars += '*'
// stars += "*"
// stars += '\n' 
// i 0      1      2
// j 0 1 2  0 1 2  0 1 2
// for (let i = 0; i < sisi; i++) {
//     for (let j = 0; j < sisi; j++) {
//         stars += ' * '
//     }
//     stars += '\n'
// }

// console.log('***\n***\n***\n')/
// console.log(stars)


//? sikusiku yang alasnya dibawah
var stars = ''
var rows = 5
// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < rows; j++) {
//         stars += ' * '
//         if (j === i) {
//             break
//         }
//     }
//     stars += '\n'
// }
// i 0  1    2 
// j 0  0 1  0 1 2
// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < i + 1; j++) {
//         stars += ' # '
//     }
//     stars += '\n'
// }

for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
        stars += ' # '
    }
    stars += '\n'
}



// console.log('***\n***\n***\n')/
// console.log(stars)

//?  fizzbuzz
// var angka = 20
// langkah cari cara buat list angka dari 1-20
// jika angka habis dibagi 3 dan 5 maka FizzBuzz
// 
// for (let i = 1; i <= angka; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log('FizzBuzz')
//     } else if (i % 5 === 0) {
//         console.log('Buzz')
//     } else if (i % 3 === 0) {
//         console.log('Fizz')
//     } else {
//         console.log(i)
//     }
// }

// ? segitiga siku alas diatas 
// console.log('***\n**\n*\n')
// var stars = ''
// var rows = 3
// stars += '*'  i=0
// stars += '*'
// stars += '*'
// stars += '\n'
// stars += '*' i=1
// stars += '*'
// stars += '\n'
// stars += '*' i=2
// stars += '\n'
// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < rows - i; j++) {
//         stars += '*'
//     }
//     stars += '\n'
// }
// ? cara lain
// for (let i = 0; i < rows; i++) {
//     for (let j = i; j < rows; j++) {
//         stars += '*'
//     }
//     stars += '\n'
// }
// console.log(stars)
// ? segitiga rata-kanan alas dibawah
// var stars = ''
// var rows = 5
// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < rows - i - 1; j++) {
//         stars += '   '
//     }
//     for (let k = 0; k < i + 1; k++) {
//         stars += ' * '
//     }
//     stars += '\n'
// }
// console.log(stars)

// ?segitiga rata kanan alas atas


var stars = ''
var rows = 5
for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i - 1; j++) {
        stars += '   '
    }
    for (let k = i; k < rows; k++) {
        stars += ' * '
    }

    stars += '\n'
}

console.log(stars)
