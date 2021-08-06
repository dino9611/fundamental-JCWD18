const onProcessClick = () => {

    let nameProduct = document.getElementById('name').value
    let priceProduct = document.getElementById('price').value // walupun typenya number tapi data yang didapatkan tetap string
    let warehouse = document.getElementById('warehouse').value
    let kondisi
    let radios = document.getElementsByName('kondisi')
    if (radios[0].checked) {
        kondisi = radios[0].value
    } else if (radios[1].checked) {
        kondisi = radios[1].value
    }

    let couriers = []
    // ambil value di check box jika true akan dimasukkan ke array
    let elementCouriers = document.getElementsByName('courier')
    elementCouriers.forEach((val) => {
        if (val.checked) {
            couriers.push(val.value)
        }
    })
    if (nameProduct && priceProduct && kondisi && warehouse && couriers.length) {
        let result = `Name : ${nameProduct}<br>
                        price : Rp.${priceProduct} <br>
                        kondisi : ${kondisi} <br>
                        warehouse : ${warehouse} <br>
                        couriers : ${couriers} 
                    `
        document.getElementById('result').innerHTML = result
        document.getElementById('name').value = ''
        document.getElementById('price').value = ''
        radios[0].checked = false
        radios[1].checked = false
        document.getElementById('warehouse').value = ''
        elementCouriers.forEach((val) => {
            val.checked = false
        })
    } else {
        alert('isi yang belum diisi')
    }


} 