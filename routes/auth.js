const authRouter = require('express').Router();
const jwt = require('jsonwebtoken');

// route ini dapat diakses melalui URL : http://localhost:3000/api/auth
// buat sebuah proses autentikasi dengan jwt di sini
// GUNAKAN LIBRARY jsonwebtoken
// untuk dokumentasi jsonwebtoken kunjungi : https://www.npmjs.com/package/jsonwebtoken

// route login
// kirimkan data berupa username dan password
authRouter.post('/', (req, res) => {
  const payload = req.body;
  // const token = jwt.sign ...
  // set expiresIn: '1h' agar token expired dalam waktu 1 jam
  const User = {
    id:1,
    username : "coba",
    password : "12345",
  }  
  //console.log(User['username']);
  const token = jwt.sign({User},process.env.SECRET_KEY,{ expiresIn: '1h' },(err, token) =>{
    if (err) {
      console.log("token tidak berhasil di buat");
    }
    res.json({
      message: 'success',
      User,
      token
    });
  });
  //   kirim token dan gunakan token yang diterima oleh respon
  
});

module.exports = authRouter;
