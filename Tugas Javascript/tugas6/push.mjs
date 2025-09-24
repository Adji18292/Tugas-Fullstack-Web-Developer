import { index, store, destroy } from "./controller.mjs";

// Tambahkan dua data user
console.log("Data User Sebelum dihapus:");
const user1 = { nama: "Budi", email: "budi@mail.com" };
const user2 = { nama: "Siti", email: "siti@mail.com" };

const main = () => {
    store(user1);
    store(user2);
    index(); // tampilkan semua data

    destroy(0); // hapus user pertama (index 0)
    console.log("\nData User Setelah dihapus:");
    index(); // tampilkan data setelah dihapus
};

main();