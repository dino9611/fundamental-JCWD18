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
    new Product(1579581080925, 'hoodie', 200000, 4, 3),
    new Product(1579581080926, 'apel', 2000, 30, 4),
]


const printData = (arr) => {

    let output = arr.map((val, index) => {
        if (index == indexDelete) {
            return (`<tr>
            <td>${val.id}</td>
            <td>${categories[val.category]}</td>
            <td>${val.name}</td>
            <td>${val.price}</td>
            <td>${val.stock}</td>
            <td><button onclick="onYesDeleteClick(${val.id})">Yes</button></td>
            <td><button onclick="onNoDelClick()">No</button></td>
        </tr>`)
        } else if (index == indexEdit) {
            return (`<tr>
            <td>${val.id}</td>
            <td>
            <select id="${"EditCategory" + index}">
                ${printCategories(val.category)}
            </select>
            </td>
            <td><input type="text" value="${val.name}" id="${"EditName" + index}"/></td>
            <td><input type="number" value="${val.price}" id="${"Editprice" + index}"/></td>
            <td><input type="number" value="${val.stock}" id="${"EditStock" + index}"/></td>
            <td><button onclick="">Save</button></td>
            <td><button onclick=" onCancelEditClick()">Cancel</button></td>
        </tr>`)
        }
        return (`<tr>
            <td>${val.id}</td>
            <td>${categories[val.category]}</td>
            <td>${val.name}</td>
            <td>${val.price}</td>
            <td>${val.stock}</td>
            <td><button onclick="onDeleteClick(${index})">Delete</button></td>
            <td><button onclick = "onEditClick(${index})">Edit</button></td>
        </tr>`)
    })
    // output array of string sedangka inner html harus string jadi di join
    document.getElementsByTagName('tbody')[1].innerHTML = output.join('')

}

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


let indexDelete = -1
let indexEdit = -1

// ? Edit Feature
const onEditClick = (index) => {
    indexEdit = index // buat tampilan action ada cancel/save
    printData(products)
}
const onCancelEditClick = () => {
    indexEdit = -1 // untuk buat tampilan balik seprti semula
    printData(products)
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


// var ravi = 'reece'
// var hasil = putri()[ravi][1][0]['rodeo']().russel('timo').yhido // angga
// var hasil = putri()[ravi][1][0]['rodeo']().russel().yhido // govar

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

const onResetClick = () => {
    document.getElementById('filterName').value = ''
    document.getElementById('filterCategory').value = '0'
    document.getElementById('min').value = ''
    document.getElementById('max').value = ''
    printData(products)
}