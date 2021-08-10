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
// 00: 02
// 00: 03
// 00: 04
// 01: 00

let angka = 0
let inputDetik = 10
// 0 - 40
let timer
// hitung maju
// timer = setInterval(() => {

//     let menit = Math.floor(angka / 60)
//     if (menit < 10) menit = '0' + menit
//     let detik = angka % 60
//     detik = detik < 10 ? "0" + detik : detik
//     console.log(`${menit}:${detik}`)
//     angka++
//     if (angka > inputDetik) {
//         clearInterval(timer)
//     }
// }, 1000);

const converToTimer = (second) => {
    let jam = Math.floor(second / (3600))
    jam = jam < 10 ? "0" + jam : jam
    let menit = Math.floor(second / (60))
    if (menit < 10) menit = '0' + menit
    let detik = second % 60
    detik = detik < 10 ? "0" + detik : detik

    return `${jam}:${menit}:${detik}`
}

// hitung mundur
timer = setInterval(() => {

    let converTime = converToTimer(inputDetik)
    console.log(converTime)
    if (inputDetik === 0) {
        clearInterval(timer)
    }
    inputDetik--
}, 1000);


