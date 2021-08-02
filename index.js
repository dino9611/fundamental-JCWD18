// const tambahan = (angka1, angka2 = 5) => {
//     if (!angka1) return 'harus ada input pertama'

//     return angka1 / angka2



// }

// tambahan(2, 6)
// tambahan(4, 3)
// tambahan(6, 3)
// tambahan(1, 2)
// tambahan(5, 4)
// var angka
const myFunc = () => {
    var angka = 3
    return angka
}

const myFunc1 = () => {
    var angka = 5
    // console.log(angka)
    // angka
    // return angka
}
var hasil1 = myFunc1()
var hasil = myFunc()
// var hasilTambahan = tambahan(3)
// console.log()
// console.log(angka)

// console.log(hasil)
// console.log(hasil1)
// console.log(hasilTambahan)



const bePositif = (angka) => {
    if (angka < 0) {
        return angka * -1
    }
    return angka
}

const beNegatif = (angka) => {
    if (angka > 0) {
        return angka * -1
    }
    return angka
}

// ? callback
// const tambahan = (cb, angka1, angka2) => {
//     angka1 = cb(angka1) //2
//     angka2 = cb(angka2) //10
//     return angka1 + angka2
// }
// ? calling another function
const tambahan = (angka1, angka2) => {
    angka1 = bePositif(angka1) //2
    angka2 = beNegatif(angka2) //10
    return angka1 + angka2
}
// f(x) = 3x+2
// f(f(10)) = 3 (3*10+2) + 2
// var cal = tambahan((angka) => {
//     if (angka < 0) {
//         return angka * -1
//     }
//     return angka
// }, 2, -10)
// var cal1 = tambahan(beNegatif, 2, -10)
// var cal = tambahan(-2, -10)
// var cal1 = tambahan(2, -10)
// console.log(cal)
// console.log(cal1)
// ? tanpa recursive
// function counterDown(counter) {

//     console.log(counter)
//     counter--
//     if (counter >= 0) {
//         console.log(counter)
//         counter--
//         if (counter >= 0) {
//             console.log(counter)
//             counter--
//             if (counter >= 0) {
//                 console.log(counter)
//                 counter--
//                 if (counter >= 0) {
//                     console.log(counter)
//                     counter--
//                     if (counter >= 0) {
//                         console.log(counter)
//                         counter--
//                         if (counter >= 0) {

//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// function counterDown(counter) {

//     console.log(counter)
//     counter--
//     if (counter >= 0) {
//         counterDown(counter)
//     }
// }

// counterDown(100)

var arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//     console.log(`Number is ${arr[i]} index ke ${i}`)
// }


// arr.forEach((value, index) => {
//     console.log(`Number is ${value} index ke ${index}`)

// })

// const cbcall = (dino, index) => {
//     console.log(`Number is ${dino} index ke ${index}`)

// }

// arr.forEach(cbcall)

// var arr = [1, 2, 3, 4, 5]
var statuses = ['reject', 'onbook', 'booking']

var arrbaru = statuses.map((val) => {
    if (val == 'booking') {
        return 'A'
    } else if (val === 'reject') {
        return 'B'
    } else {
        return 'C'
    }
})
console.log(arrbaru)

const mapDuplicate = (arr, cb) => {
    //
    var newArr = []
    for (let i = 0; i < arr.length; i++) {
        var newVal = cb(arr[i])
        newArr.push(newVal)
    }
    return newArr
}




var hasil = mapDuplicate(statuses, (val) => {
    if (val == 'booking') {
        return 'D'
    } else if (val === 'reject') {
        return 'A'
    } else {
        return 'Z'
    }
})
console.log(hasil)