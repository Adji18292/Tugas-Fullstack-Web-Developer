let produkToko = [
   {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
   {id: 2, nama: "Mouse", harga: 200000, stok: 10},
   {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

function tampilkanProduk() {
    console.log("--- Daftar Produk Toko ---");
    if (produkToko.length === 0) {
        console.log("Tidak ada produk yang tersedia saat ini.");
    } else {
        produkToko.forEach(produk => {
            console.log(`ID: ${produk.id}, Nama: ${produk.nama}, Harga: Rp${produk.harga.toLocaleString('id-ID')}, Stok: ${produk.stok}`);
        });
    }
    console.log("--------------------------\n");
}

function tambahProduk(nama, harga, stok) {
    if (typeof nama !== 'string' || nama.trim() === '') {
        console.error("ERROR: Nama produk tidak boleh kosong.");
        return;
    }
    if (typeof harga !== 'number' || harga < 0 || typeof stok !== 'number' || stok < 0) {
        console.error("ERROR: Harga dan stok harus berupa angka non-negatif.");
        return;
    }
    const idBaru = produkToko.length > 0 ? Math.max(...produkToko.map(p => p.id)) + 1 : 1;
    
    const produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };
    produkToko.push(produkBaru);
    console.log(`INFO: Produk "${nama}" berhasil ditambahkan.`);
}

function hapusProduk(id) {
    const indexProduk = produkToko.findIndex(produk => produk.id === id);
    if (indexProduk !== -1) {
        const namaProduk = produkToko[indexProduk].nama;
        produkToko.splice(indexProduk, 1);
        console.log(`INFO: Produk "${namaProduk}" (ID: ${id}) berhasil dihapus.`);
    } else {
        console.log(`ERROR: Produk dengan ID ${id} tidak ditemukan.`);
    }
}

tampilkanProduk();

tambahProduk("Monitor", 1500000, 8);
tampilkanProduk();

hapusProduk(2);
tampilkanProduk();

console.log("--- Mencoba menambahkan data tidak valid ---");
tambahProduk("Speaker", -50000, 10);
tambahProduk("", 250000, 5);