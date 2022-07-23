const { Schema, default: mongoose } = require('mongoose');

// buat model mahasiswa dengan rincian schema sebagai berikut, jangan lupa definisikan juga tipe data property tersebut
// nama
// nim
// email
// alamat
// tahunMasuk
// tanggalLahir
const mahasiswaSchema = new Schema(
  {
    // property : nama, type data : String
    nama: String,
    nim: String,
    email: String,
    // almat: String,
    // tahunMasuk: Date,
    // tanggalLahir: Date,
    // lanjutkan...
  },
  {
    // collection adalah sebuah tabel pada database
    collection: 'mahasiswa',
  }
);

const Mahasiwa = mongoose.model('Mahasiwa', mahasiswaSchema);

module.exports = Mahasiwa;
