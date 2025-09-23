// Data Produk
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Headphone", harga: 1500000 },
  { id: 4, nama: "Keyboard Mechanical", harga: 2000000 },
  { id: 5, nama: "Mouse Gaming", harga: 800000 }
];

const eventHandler = {

};

// Menambahkan Produk dengan Spread Operator
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };

  // Menambahkan produk baru ke dalam array produkList menggunakan spread operator
  produkList = [...produkList, produkBaru];
}

// Menghapus Produk dengan Rest Parameter
function hapusProduk(...ids) {

  // Menggunakan rest parameter untuk menerima satu atau lebih id untuk dihapus
  const produkDihapus = produkList.filter(produk => ids.includes(produk.id)).map(p => p.nama);

  // Memfilter produkList, hanya menyimpan produk yang id-nya tidak ada di dalam array 'ids'
  produkList = produkList.filter(produk => !ids.includes(produk.id));
  
  if (produkDihapus.length > 0) {
    console.log(`\nProduk "${produkDihapus.join(', ')}" berhasil dihapus.`);
  }
}

// Menampilkan Produk dengan Destructuring
function tampilkanProduk() {
  console.log("\n--- Daftar Produk Saat Ini ---");
  if (produkList.length === 0) {
    console.log("Tidak ada produk untuk ditampilkan.");
    return;
  }

  produkList.forEach(produk => {
    // Destructuring object untuk mengekstrak properti secara langsung
    const { id, nama, harga } = produk; // Destructuring object
    console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga.toLocaleString('id-ID')}`);
  });
}

// Skenario Penggunaan 
tampilkanProduk();

console.log('\nMenambahkan produk baru...');
tambahProduk(6, "Tablet", 7000000);
tampilkanProduk();

console.log('\nMenghapus beberapa produk...');
hapusProduk(2, 4); // Menghapus produk dengan ID 2 dan 4 sekaligus
tampilkanProduk();
