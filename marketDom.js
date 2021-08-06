class Product {
    constructor(_id, _name, _price, _stock, _category) {
        this.id = _id
        this.name = _name
        this.price = _price
        this.stock = _stock
        this.category = _category
    }
}

let categories = ['all', 'Fast food', 'electronic', 'cloth', 'fruits']

let products = [
    new Product(1579581080923, 'Noodle', 3500, 9, 1),
    new Product(1579581080924, 'TV', 4300000, 5, 2),
    new Product(1579581080925, 'hodie', 200000, 4, 3),
    new Product(1579581080926, 'apel', 2000, 30, 4),
]

const printData = () => {

    // ? first 
    // let output = ''
    // products.forEach((val) => {
    //     output += `
    //     <tr>
    //         <td>${val.id}</td>
    //         <td>${categories[val.category]}</td>
    //         <td>${val.name}</td>
    //         <td>${val.price}</td>
    //         <td>${val.stock}</td>
    //     </tr>`
    // })
    // document.getElementsByTagName('tbody')[1].innerHTML = output

    // ? second way
    let output = products.map((val) => {
        return (`<tr>
            <td>${val.id}</td>
            <td>${categories[val.category]}</td>
            <td>${val.name}</td>
            <td>${val.price}</td>
            <td>${val.stock}</td>
        </tr>`)
    })
    // output array of string sedangka inner html harus string jadi di join
    document.getElementsByTagName('tbody')[1].innerHTML = output.join('')

    // document.getElementsByTagName('tbody')[1].innerHTML = `
    // <tr>
    //     <td>${products[0].id}</td>
    //     <td>${categories[products[0].category]}</td>
    //     <td>${products[0].name}</td>
    //     <td>${products[0].price}</td>
    //     <td>${products[0].stock}</td>
    // </tr>
    // <tr>
    //     <td>${products[1].id}</td>
    //     <td>${categories[products[1].category]}</td>
    //     <td>${products[1].name}</td>
    //     <td>${products[1].price}</td>
    //     <td>${products[1].stock}</td>
    // </tr>
    // <tr>
    //     <td>${products[2].id}</td>
    //     <td>${categories[products[2].category]}</td>
    //     <td>${products[2].name}</td>
    //     <td>${products[2].price}</td>
    //     <td>${products[2].stock}</td>
    // </tr>
    // <tr>
    //     <td>${products[3].id}</td>
    //     <td>${categories[products[3].category]}</td>
    //     <td>${products[3].name}</td>
    //     <td>${products[3].price}</td>
    //     <td>${products[3].stock}</td>
    // </tr>
    // `
}
printData()
// todo : Input data #priority
    // input data algortihm
    // ambil data di tiap tag input 
    // push data ke variable products 
    // lalu print data ulang

// todo :Filter dikerjakan setelah input
    // filter data algorithm
    // ambil input filter 
    // terus lakukan filter 
    // bisa menggunakan filter array atau looping biasa 
    // data master jangan sampai di ganti 
    // setelah itu printdata ulang


