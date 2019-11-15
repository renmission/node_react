const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const epxressValidator = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

// db
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(`DB Connection error: ${err}`))

// middleware
app.use(morgan('dev'));

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// routes init
const post = require('./routes/post');

app.use('/', post);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`A node js api on port ${port}`);
});