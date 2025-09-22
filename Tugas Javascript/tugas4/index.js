const readline = require('readline');

// Customer Class
class Customer {
    constructor(name, phoneNumber, rentedVehicle) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.rentedVehicle = rentedVehicle;
    }
}

// Customer Management Class
class CustomerManager {
    constructor() {
        this.customerList = [];
    }

    addCustomer(customer) {
        this.customerList.push(customer);
        console.log(`\nPelanggan "${customer.name}" berhasil ditambahkan.`);
    }

    getCustomerList() {
        // Return a copy to prevent external modification of the internal list
        return [...this.customerList];
    }
}

const customerManager = new CustomerManager();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayCustomerList() {
    console.log("\n--- Daftar Pelanggan Aktif ---");
    const customers = customerManager.getCustomerList();

    if (customers.length === 0) {
        console.log("Belum ada pelanggan yang terdaftar.");
    } else {
        customers.forEach((customer, index) => {
            console.log(`${index + 1}. ${customer.name} (${customer.phoneNumber}) - ${customer.rentedVehicle}`);
        });
    }
    console.log("------------------------------\n");
    // Kembali ke menu utama setelah menampilkan daftar
    showMenu();
}

function addNewCustomer() {
    rl.question("Masukkan nama pelanggan: ", (name) => {
        const trimmedName = name.trim();
        // Validasi nama pelanggan tidak boleh mengandung angka
        if (/\d/.test(trimmedName)) {
            console.log("\nInput tidak valid. Nama pelanggan tidak boleh mengandung angka. Silakan coba lagi.\n");
            showMenu();
            return;
        }

        rl.question("Masukkan nomor telepon: ", (phoneNumber) => {
            // Validasi nomor telepon harus berupa angka
            const trimmedPhoneNumber = phoneNumber.trim();
            if (!/^\d+$/.test(trimmedPhoneNumber)) {
                console.log("\nInput tidak valid. Nomor telepon harus berupa angka. Silakan coba lagi.\n");
                showMenu();
                return;
            }

            rl.question("Masukkan kendaraan yang disewa: ", (rentedVehicle) => {
                const trimmedVehicle = rentedVehicle.trim();

                // Validasi nama kendaraan tidak boleh mengandung angka
                if (/\d/.test(trimmedVehicle)) {
                    console.log("\nInput tidak valid. Nama kendaraan tidak boleh mengandung angka. Silakan coba lagi.\n");
                    showMenu();
                    return;
                }

                // Validasi input tidak boleh kosong
                if (!trimmedName || !trimmedPhoneNumber || !trimmedVehicle) {
                    console.log("\nSemua data harus diisi. Silakan coba lagi.\n");
                    showMenu();
                    return;
                }
                const newCustomer = new Customer(trimmedName, trimmedPhoneNumber, trimmedVehicle);
                customerManager.addCustomer(newCustomer);
                showMenu();
            });
        });
    });
}

function showMenu() {
    console.log("Pilih aksi yang ingin dilakukan:");
    console.log("1. Tambah Pelanggan Baru");
    console.log("2. Tampilkan Semua Pelanggan");
    console.log("3. Keluar");

    rl.question("Masukkan pilihan Anda (1/2/3): ", (choice) => {
        switch (choice) {
            case '1':
                addNewCustomer();
                break;
            case '2':
                displayCustomerList();
                break;
            case '3':
                console.log("Terima kasih telah menggunakan aplikasi ini. Sampai jumpa!");
                rl.close();
                break;
            default:
                console.log("\nPilihan tidak valid. Silakan masukkan 1, 2, atau 3.\n");
                showMenu();
                break;
        }
    });
}

// Memulai aplikasi
console.log("Selamat datang di Sistem Manajemen Rental Kendaraan");
console.log("=================================================\n");
showMenu();

rl.on('close', () => {
    process.exit(0);
});