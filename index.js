const putri = () => {
    return {
        reece: [,
            [
                {
                    rodeo: () => {
                        return {
                            russel: (bebas) => {
                                if (bebas === 'timo') {
                                    return {
                                        yhido: 'angga'
                                    }
                                } else {
                                    return {
                                        yhido: 'govar'
                                    }
                                }
                            }
                        }
                    }
                }
            ]
        ]
    }
}


var ravi = 'reece'
var hasil = putri()[ravi][1][0]['rodeo']().russel('timo').yhido // angga
var hasil1 = putri()[ravi][1][0]['rodeo']().russel().yhido // govar

// console.log(hasil)
// console.log(hasil1)


var noSim = ['082214475231', '082214475232', '+628799123011']

// tiap value di array 
// string menjadi array, di reverse habis itu array 0 sampai 3 itu di jadiin
// x 
// reverse lagi baru dijoin 

const toSecretSimNumber = (noSims = []) => {
    for (let i = 0; i < noSims.length; i++) {
        let nomerHp = noSims[i]
        nomerHp = nomerHp.split('').reverse()
        for (let j = 0; j < 4; j++) {
            nomerHp[j] = 'x'
        }
        nomerHp = nomerHp.reverse().join('')
        noSims[i] = nomerHp
    }
    return noSims
}

// console.log(toSecretSimNumber(noSim))


const cekPlat = (plat) => {

}

// cekPlat ganjil atau genap 
// jika tanggal sekarang ganjil maka kalo platnya ganjil
// maka return true kalo genap false
// jika tanggal sekarang genap dan platnya ganjil 
// maka return false, klo ganjil true

// // case dicoba tanggal 9
// console.log(cekPlat('B 1111 EHA')) // true
// console.log(cekPlat('BH 1112 AH')) // false
// console.log(cekPlat('BM 1232 EH')) // false

// // case jika dicoba tanggal 10 
// console.log(cekPlat('B 1111 EHA')) // false
// console.log(cekPlat('BH 1112 AH')) // true
// console.log(cekPlat('BM 1232 EH')) // true


// setTimeout(() => {
//     console.log('tes')
// }, 5000)

// clearTimeout(time)
// 00: 01
// 01: 00

let angka = 1
let time
time = setInterval(() => {
    console.log(angka)
    angka++
    if (angka > 40) {
        clearInterval(time)
    }
}, 1000);

