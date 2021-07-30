// var things = ["book", 'pen', 'clock']
// console.log(things[0])
// console.log(things[1])
// console.log(things[2])
// console.log(things.length)
// things[1] = 'pulpen'
// things[3] = 'paper' // karena index maksimalnya 2 maka dia akan tambah
// things[things.length] = 'towel' // bisa digunakan kalo tidak tau index paling ujung

// console.log(things)
// // console.log(things.length)
// // var arr = []
// // console.log(arr.length)
// console.log(things[0])
// console.log(things[things.length - 1]) // jika mau mendapatkan index terakhir

// var things = ["book", 'pen', 'clock', 'paper', 'Towel']
// console.log(things.length)

// things.unshift('paper', "towel")
// things.shift()
// things.splice(2, 0, "pencil", 'staples') // buat tambah data ditengah, 0 artinya tidaka da yang dihapus
// things.splice(2, 1, "pencil") // edit clock aja , 1 artinya hanya value di index 2 yang dihapus
// var newthings = things.slice(1, 4)
//console.log(things.includes('Book')) // dibaca books ada ngggak didalam things
// console.log(newthings)
// console.log(things.indexOf("Clock"))
// things.sort()

// console.log(things)

var numb = [7, 2, 5, 6]
numb.sort()
numb.reverse()
// console.log(numb)

var things = ["book", 'pen', 'clock', 'paper', 'Towel']

var kata = things.join()

// console.log(kata)

var benda = ["mask", "pen"]
var fruits = ["banana", "apple"]
var animals = ["rabbit", "cat"]

var two = benda.concat(fruits)
var three = benda.concat(fruits, animals)
var other = [...animals, ...fruits, ...benda, "tiger"]
// console.log(two)
// console.log(three)
// console.log(other)

// var things = [
//     ['red pen', 'blue pen'],
//     ['clock', 'digital clock'],
//     ['shoes', 'running shoes']
// ]
// things[1][0] = 'analog clock'
// things[1].splice(0, 1, 'analog clock')

// console.log(things[0][1])
// console.log(things)

// var categories = ['Sci-fi', 'Horror', 'Animation', "Action", 'Drama', 'Mystery', "Spongebob"]
// console.log(`Terdapat ${categories.length} kategori film yaitu :`)
// console.log(categories[0])
// console.log(categories[1])
// console.log(categories[2])
// console.log(categories[3])
// console.log(categories[4])
// console.log(categories[5])
// for (let i = 0; i < categories.length; i++) {
//     console.log(categories[i])
// }

var names = ['Alex', 'Elena', 'Chaplin', 'Bernard', 'Michael', 'Dwight', 'Jim']
names.sort()
var reverseName = []
for (let i = names.length - 1; i >= 0; i--) {
    reverseName.push(names[i])
}
// reverseName.push(names[6])
// reverseName.push(names[5])
// reverseName.push(names[4])
// reverseName.push(names[3])
// reverseName.push(names[2])
// reverseName.push(names[1])
// reverseName.push(names[0])
names = reverseName
// console.log(names)

// imitasi indexOf
var names = ['Elena', 'Alex', 'Chaplin', 'Bernard', 'Michael', 'Dwight', 'Jim']
var search = 'alex'

var hasil = -1
for (let i = 0; i < names.length; i++) {
    if (search.toLowerCase() === names[i].toLowerCase()) {
        hasil = i
    }
}

console.log(hasil)//0
var things = [
    ['red pen', 'blue pen'],
    ['clock', 'digital clock'],
    ['shoes', 'running shoes']

]
things.push(['apel', 5000, 5])
console.log(things)