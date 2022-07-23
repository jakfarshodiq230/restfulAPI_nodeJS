const { default: mongoose } = require('mongoose');

// kredensial untuk dapat terhubung ke mongodb
// silahkan pelajari cara membuat database di MongoDB local atau MongoDB Atlas
// contoh di sini menggunakan URL database yang sudah saya buat di MongoDB Atlas
// SILAKAN GANTI DENGAN KONFIGURASI MONGODB KALIAN (AGAR DAPAT MEMAHAMI ALUR PROSES PEMBUATAN DATABASE MONGODB)
// atau GUNAKAN SAJA YANG SUDAH ADA (JIKA SUDAH MENGERTI)
const mongoURI ='mongodb+srv://jakfar:jCkAyv3zRT0Pk1Qp@apliaksi.eoxxp.mongodb.net/?retryWrites=true&w=majority';

// hubungkan database menggunakan mongoose
mongoose.connect(mongoURI, (err) => {
  // jika error
  //if (err) throw new Error(err);

  // jika terhubung
  console.log('database connected');
});
