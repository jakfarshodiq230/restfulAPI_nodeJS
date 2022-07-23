require('dotenv').config();
const express = require('express');
const authRouter = require('./routes/auth');
const mahasiswaRouter = require('./routes/mahasiswa');
const app = express();
require('./db/connection');

app.use(express.json());

// atur routing di sini
app.use('/api/auth', authRouter);
app.use('/api/mahasiswa', mahasiswaRouter);

app.listen(3000);
