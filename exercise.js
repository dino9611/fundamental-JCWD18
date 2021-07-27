//? soal 1

var x = 4
var y = 3
var z = 2
var atas = x + y * z
var bawah = x * y
// var w = (atas / bawah) ** 2
var w = Math.pow(atas / bawah, 2)
// console.log(w)


//? soal 3
// console.log(Math.cbrt(8))




// 485 / 360 = 1.blalba dibulatin kebawah untuk dapetin angka 1 aja
// 485 % 360 = 125
// 125 / 30 = 4.blablab
// 5 % 30 = 5
// 5/7 = 0.blabla
// 5% 7 = 5 sisa hari

// ? soal 4 
var jumlahHari = 500
var tahun = Math.floor(jumlahHari / 360)
jumlahHari = jumlahHari % 360
var bulan = Math.floor(jumlahHari / 30)
jumlahHari %= 30
var minggu = Math.floor(jumlahHari / 7)
var sisahari = jumlahHari % 7

console.log(`${tahun} tahun, ${bulan} bulan, ${minggu} minggu, ${sisahari} hari`)

// 10/20 = 1:2
// ? soal 5
// jumlah usia andi + budi = 49
// rasio andi dan budi = 0.4 = 2/5  = 2/5 + 5/5 =  7
// 7 * x = 49
// x = 49 / 14 = 7
// andi = 7 * 2 = 14 + 2 = 16
// budi = 7 * 5  = 35 + 2 = 37


// berapa usia andi dan budi 2 tahun lagi
var jumlahUsia = 49
var rasioandi = 2
var rasiobudi = 5
var x = jumlahUsia / (2 + 5)
var andi = x * rasioandi + 2
var budi = x * rasiobudi + 2

console.log(`usia andi 2 tahun lagi adalah ${andi} tahun , dan budi adalah ${budi} tahun`)

// ? soal 6

// mobil a = 60km / h 
// mobil b = 40km / h
// jarak =120 km 
//  a+b = 100 
// waktu = 120 / 100 km/h
// waktu = 1,2 h * 60  =72 m 
// 9.00 = 
// jam = m / 60 =  1.2 dibulatin =1 h 
// menit = m % 60 = 12
// jam = jam+9 
// menit = 0 +menit

var mobilA = 60
var mobilB = 40
var AkeB = 120
var waktu = 120 / (mobilA + mobilB)
var waktuInMinutes = waktu * 60
var jam = Math.floor(waktuInMinutes / 60)
var minute = Math.floor(waktuInMinutes % 60)
var jamAwal = 9
var menitAwal = 0

console.log(`waktu tabrakan adalah ${jamAwal + jam}.${menitAwal + minute}`)
// bisa pake yang bawah atau yang atas untuk stringnya
// console.log('waktu tabrakan adalah ' + (jamAwal + jam) + '.' + (menitAwal + minute))


