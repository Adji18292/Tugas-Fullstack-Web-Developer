let users = []; // gunakan array untuk menyimpan data user

const index = () => {
    // tampilkan semua data user menggunakan map()
    users.map((u, i) => {
        console.log(`${i + 1}. Nama: ${u.nama}, Email: ${u.email}`);
    });
};

const store = (user) => {
    // tambah data user
    users.push(user);
};

const destroy = (indexUser) => {
    // hapus data user berdasarkan index
    users.splice(indexUser, 1);
};

export { index, store, destroy };