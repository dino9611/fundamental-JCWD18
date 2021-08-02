let stars = ''
let rows = 5
for (let i = 0; i < rows; i++) {
    for (let j = i; j < rows - 1; j++) {
        stars += '   '
    }
    for (let k = 0; k < i + 1; k++) {
        stars += ' * '
    }
    for (let l = 0; l < i; l++) {
        stars += ' * '
    }
    stars += '\n'
}
// for (let i = 0; i < rows; i++) {
//     // ? uncomment kalo mau bikin belah ketupat
//     // if (i === 0) {
//     //     continue
//     // }
//     for (let j = 0; j < i; j++) {
//         stars += '   '
//     }
//     for (let k = i; k < rows; k++) {
//         stars += ' * '
//     }
//     for (let l = i; l < rows - 1; l++) {
//         stars += ' * '
//     }

//     stars += '\n'
// }


console.log(stars)