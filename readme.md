# day 8 
## all about object

# PR market prompt terakhir 
Ini akan menjadi versi terakhir dari market yang kita buat menggunakan prompt dan juga alert. Pada versi terakhir ini teman - teman akan diminta untuk memaintain kode pada app market dengan ketentuan sebagai berikut :

- Sekarang market tidak lagi hanya menjual buah, melainkan berbagai macam produk lainnya. Produk yang dijual kini memiliki empat jenis berbeda. Ada produk yang akan digolongkan sebagai fastfood, kemudian cloth atau pakaian, elektronik dan juga buah. Jadi total ada tiga jenis produk baru yang akan kita jual selain buah.

- Keempat produk memiliki beberapa properties yang sama. Dan setiap produk juga akan memiliki properties yang sifatnya unik, artinya properties yang hanya ada di satu jenis produk saja.

- Properties yang akan ada pada semua jenis produk diantaranya :
    - category
    - name
    - price
    - stock

- Properties yang akan ada pada jenis produk fast food adalah expired : berisi integer yang menunjukkan tahun dimana makanan ini tidak lagi layak untuk dikonsumsi

- Properties yang akan ada pada jenis produk cloth adalah size : berisi satu buah huruf yang menunjukkan ukuran dari pakaian, terdapat empat huruf yaitu s, m, l, dan xl

- Properties yang akan ada pada jenis produk electronic adalah warranty : berisi string 'yes' atau 'no' untuk menunjukkan bahwa barang tersebut masih memiliki garansi atau tidak.

- Properties yang akan ada pada jenis produk buah  adalah sugarLevel : berisi sebuah string yang memiliki tiga buah pilihan yaitu 'low', 'medium', dan 'high' untuk memberi tahu tingkat kandungan gula yang ada pada buah

- Karena kini sudah memiliki jenis atau kategori produk. Saat akan menambahkan produk baru, maka akan menentukan jenisnya terlebih dahulu sebelum menginput data lainnya seperti nama dan harga. Karena setiap jenis produk memiliki properties uniknya masing - masing. Maka nantinya pertanyaan yang muncul juga akan bersifat dinamis atau berbeda disetiap jenisnya. Sebagai contoh saat kita sedang menginput produk yang termasuk jenis pakaian, maka akan muncul prompt yang akan meminta kita untuk memasukkan informasi size pakaian tersebut. Kemudian jika kita sedang mencoba untuk menambahkan produk jenis elektronik, maka nanti akan ada pertanyaan mengenai status garansinya. Kurang lebih seperti itu.

- Mungkin hanya itu saja hal yang baru untuk versi market kali ini. Sisanya hanya perlu penyesuaian saja seperti pada proses belanja hingga user melakukan pembayaran. Karena sekarang data disimpan sudah dalam bentuk object, tidak lagi menggunakan array dua dimensi.
