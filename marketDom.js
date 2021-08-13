class Product {
    constructor(_id, _name, _price, _stock, _category) {
        this.id = _id
        this.name = _name
        this.price = _price
        this.stock = _stock
        this.category = _category
    }
}
class Cart {
    constructor(_id, _name, _price, _category, _qty) {
        this.id = _id
        this.name = _name
        this.price = _price
        this.category = _category
        this.qty = _qty
    }
}



let categories = ['all', 'Fast food', 'electronic', 'cloth', 'fruits']

let products = [
    new Product(1579581080923, 'Noodle', 3500, 9, 1),
    new Product(1579581080924, 'TV', 4300000, 5, 2),
    new Product(1579581080925, 'hoodie', 200000, 4, 3),
    new Product(1579581080926, 'apel', 2000, 30, 4),
] // master data



let carts = [

]

let indexDelete = -1
let indexEdit = -1

const printData = (arr) => {

    let output = arr.map((val, index) => {
        //! jika mau disabled 
        // var buyButton = val.stock <= 0 ? `<button onclick="onBuyClick(${val.id})" disabled >buy</button> ` : `<button onclick="onBuyClick(${val.id})"  >buy</button> `
        if (index == indexDelete) {
            return (`
            <tr>
                <td>${val.id}</td>
                <td>${categories[val.category]}</td>
                <td>${val.name}</td>
                <td>${val.price}</td>
                <td>${val.stock}</td>
                <td><button>buy</button></td>
                <td><button onclick="onYesDeleteClick(${val.id})">Yes</button></td>
                <td><button onclick="onNoDelClick()">No</button></td>
            </tr>`
            )
        } else if (index == indexEdit) {
            return (`
            <tr>
                <td>${val.id}</td>
                <td>
                <select id="${"EditCategory"}">
                    ${printCategories(val.category)}
                </select>
                </td>
                <td><input type="text" value="${val.name}" id="${"EditName"}"/></td>
                <td><input type="number" value="${val.price}" id="${"EditPrice"}"/></td>
                <td><input type="number" value="${val.stock}" id="${"EditStock"}"/></td>
                <td><button>buy</button></td>
                <td><button onclick="onSaveEditClick(${val.id})">Save</button></td>
                <td><button onclick=" onCancelEditClick()">Cancel</button></td>
            </tr>`
            )
        }
        return (`<tr>
            <td>${val.id}</td>
            <td>${categories[val.category]}</td>
            <td>${val.name}</td>
            <td>${val.price}</td>
            <td>${val.stock}</td>
            <td><button onclick="onBuyClick(${val.id})">buy</button> </td>
            <td><button onclick="onDeleteClick(${index})">Delete</button></td>
            <td><button onclick = "onEditClick(${index})">Edit</button></td>
        </tr>`)
    })
    // output array of string sedangka inner html harus string jadi di join
    document.getElementsByTagName('tbody')[1].innerHTML = output.join('')

}



const printCarts = () => {
    let output = carts.map((val) => {
        return (`
        <tr>
            <td>${val.id}</td>
            <td>${categories[val.category]}</td>
            <td>${val.name}</td>
            <td>${val.qty}</td>
            <td>${val.price}</td>
            <td><button>Delete</button></td>
        </tr>
        `)
    })
    document.getElementsByTagName('tbody')[2].innerHTML = output.join('')
}


printCarts()
printData(products)



let printCategories = (indexCat) => {
    var output = ''
    for (let i = 0; i < categories.length; i++) {
        if (i == 0) {
            output += `<option value="" hidden>pilih category</option>`
        } else if (i == indexCat) {
            output += `<option value="${i}" selected>${categories[i]}</option>`
        } else {
            output += `<option value="${i}" >${categories[i]}</option>`
        }
    }
    return output
}




// ? Edit Feature
const onEditClick = (index) => {
    indexEdit = index // buat tampilan action ada cancel/save
    printData(products)
}
const onCancelEditClick = () => {
    indexEdit = -1 // untuk buat tampilan balik seprti semula
    printData(products)
}

const onSaveEditClick = (id) => {
    let indexUpdate = products.findIndex((val) => val.id == id) // untuk mendapatkan index products berdasarkan Id
    var category = document.getElementById('EditCategory').value
    var name = document.getElementById('EditName').value
    var price = document.getElementById('EditPrice').value
    var stock = document.getElementById('EditStock').value
    var obj = {
        category: category, // category :category 
        name, // sama dengan name : name
        price,
        stock
    }
    if (name && price && category && stock) {
        let newEditProduct = new Product(products[indexUpdate].id, name, price, stock, category)
        products.splice(indexUpdate, 1, newEditProduct)
        // ? another way
        // products[indexUpdate].category = category
        // products[indexUpdate].name = name
        // products[indexUpdate].price = price
        // products[indexUpdate].stock = stock
        // ? spread operator way
        // let newEditProduct = { ...products[indexUpdate], ...obj } // cara mengupdate object
        // let newEditProduct = { ...products[indexUpdate], name: name, category, stock, price }
        // products.splice(indexUpdate, 1, newEditProduct)
        indexEdit = -1
        printData(products)
    } else {
        alert('isi semua field edit')
    }
}


// ? delete feature
const onDeleteClick = (index) => {
    indexDelete = index // buat tampilan action ada yes/No
    printData(products)
}

const onNoDelClick = () => {
    indexDelete = -1 // untuk buat tampilan balik seprti semula
    printData(products)
}
const onYesDeleteClick = (id) => {
    let indexDel = products.findIndex((val) => val.id == id)
    products.splice(indexDel, 1)
    indexDelete = -1
    printData(products)
}




const onInputDataClick = () => {

    const name = document.getElementById('inputName').value // kalo tidak diisi isinya pasti string ksoong
    const price = document.getElementById('inputPrice').value
    const category = document.getElementById('inputCategory').value
    const stock = document.getElementById('inputStock').value
    // string kosong sama dengan false
    // kita validasi dulu pastikan input tidak ksong
    if (name && price && category && stock) {
        let newProduct = new Product(new Date().getTime(), name, price, stock, category)
        products.push(newProduct)
        // console.log(products)
        // update tampilan
        printData(products)
        // buat hilangin isi dari tiap input 
        // agar kembali seperti semula
        document.getElementById('inputName').value = ''
        document.getElementById('inputPrice').value = ''
        document.getElementById('inputCategory').value = ''
        document.getElementById('inputStock').value = ''
    } else {
        // jika ada salah satu input yang tidak diisi maka
        // akan masuk else
        alert('ada input yang belum terisi')
    }
}

var kali = 0
const onfilterName = () => {
    const filterName = document.getElementById('filterName').value

    const newFilterProd = products.filter((val) => {
        // name hurufnya dikecilin 
        // input juga dikecilin
        return val.name.toLowerCase().includes(filterName.toLowerCase())
    })

    printData(newFilterProd)
    // console.log(newFilterProd)
}

const onFilterCategory = () => {
    const filterCategory = document.getElementById('filterCategory').value
    const newFilterProd = products.filter((val) => {
        if (filterCategory == 0) {
            return true
        }
        return val.category == filterCategory
    })
    printData(newFilterProd)
}

const onFilterPrice = () => {
    const min = document.getElementById('min').value
    const max = document.getElementById('max').value
    if (min && max) {
        const newFilterProd = products.filter((val) => {
            return val.price >= min && val.price <= max
        })
        printData(newFilterProd)
    }
}

const onFilter = () => {
    const min = document.getElementById('min').value
    const max = document.getElementById('max').value
    const filterCategory = document.getElementById('filterCategory').value
    const filterName = document.getElementById('filterName').value
    const newFilterProd = products.filter((val) => {
        let filtName
        let filtMin
        let filtMax
        let filtCategory
        if (filterName) {
            filtName = val.name.toLowerCase().includes(filterName.toLowerCase()) 
        } else {
            filtName = true
        }
        // boleh pake if boleh pake if ternary
        filtMin = min ? val.price >= min : true  // true membuat variablenya terus berfungsi agar jika input ksong, true tidak akan mempengaruhi value yang di filter 
        filtMax = max ? val.price <= max : true
        filtCategory = filterCategory == 0 ? true : filterCategory == val.category

        return filtName && filtMin && filtMax && filtCategory 
    })

    printData(newFilterProd)
}

const onResetClick = () => {
    document.getElementById('filterName').value = ''
    document.getElementById('filterCategory').value = '0'
    document.getElementById('min').value = ''
    document.getElementById('max').value = ''
    printData(products)
}


// cari index berdasarkan Id dengan findIndex  di array dataproduct
// cari juga apakah ada id tersebut didalam cart
// jika ada atau indexnya buakn min maka tambah qty saja 
// jika tidak atau indexnya -1 maka push product baru ke cart
// dengna menggunakan indexproduct kita bisa mengurangi stock
// setelah index didapatkan push ke array carts
// print cart ulang

const onBuyClick = (id) => {
    let indexProd = products.findIndex((val) => val.id === id)
    if (indexProd >= 0) { // memastikan id prodcuts benar ada
        let indexCart = carts.findIndex((val) => val.id == id)
        if (products[indexProd].stock == 0) {
            alert('stock kosong')
            return // dengan return koding dibawahnya tidak akan dibaca sama saja seperti menggunakan if else
        }
        products[indexProd].stock -= 1
        if (indexCart < 0) { // tidak ada product id yang sama di cart 
            let { id, name, price, category } = products[indexProd] //destructuring obj
            carts.push(new Cart(id, name, price, category, 1))
            // console.log(carts)
            // ? cara panjangnya tanpa destructuring
            // carts.push(new Cart(products[indexProd].id, products[indexProd].name, products[indexProd].price, products[indexProd].category))
        } else {
            carts[indexCart].qty += 1
        }

        onResetClick()
        printCarts()
        printData(products)
    }
}

const onPaymentClick = () => {
    let output = carts.map((val) => {
        return `${val.id} | ${categories[val.category]} |${val.name} | ${val.price}X${val.qty} = Rp.${val.price * val.qty},00 <br>`
    })
    document.getElementById('payment').innerHTML = output.join('')
    let subTotal = 0
    carts.forEach((val) => {
        subTotal += val.price * val.qty
    })
    let ppn = subTotal * (10 / 100)
    let Total = subTotal + ppn
    document.getElementsByTagName('h3')[0].innerHTML = 'subtotal ' + subTotal
    document.getElementsByTagName('h3')[1].innerHTML = 'ppn ' + ppn
    document.getElementsByTagName('h3')[2].innerHTML = 'Total ' + Total
}