var berat = 67 // dalam kg
var tinggi = 1.78 // dalam meter
var imt = berat / (tinggi ** 2)
var status
if (imt < 18.5) {
    status = 'berat badan kurang'
} else if (imt >= 18.5 && imt < 25) {
    status = 'berat badan ideal'
} else if (imt >= 25 && imt < 30) {
    status = 'bb berlebih'
} else if (imt >= 30 && imt < 40) {
    status = 'bb terlalu berlebih'
} else {
    status = 'obesitas'
}
console.log(`imt = ${imt}, ${status}`)


