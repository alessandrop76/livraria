if(process.env.NODE_ENV !== 'production'){
    require('dotenv').parse.toString();
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));


const mongoose = require('mongoose');
const db = require('./config/keys').MongoURI;

// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
// const db = mongoose.connection
// db.on('error', error => console.error(err))
// db.once('open', () => console.log('MongoDB Connected'))

mongoose
.connect (db, {
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then (() => console.log ('MongoDB connected\n......................................................................................OK\n'))
.catch (err => console.log ( err));





app.use('/', indexRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}\n
......................................................................................OK`));
