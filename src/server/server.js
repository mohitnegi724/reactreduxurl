const express  = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const ShortUrl = require('./models/mongodb');

//Body Parser Middleware
app.use(bodyParser.json());

//Db related Code
const Keys = require('./config/keys');
const mongoose = require('mongoose');
const db = Keys.mongoURI;
mongoose.connect(db)
.then(()=>console.log('db Connected'))
.catch((error) => console.log("there was an error" + error));



app.post('/short', (req, res, next)=>{
    const newShortUrl = new ShortUrl({
        originalUrl: req.body.originalUrl,
        ShortUrl:req.body.ShortUrl
    });
    newShortUrl.save()
    .then(newShortUrl=> res.send(newShortUrl))
    .catch(err=>res.send(err));
});

app.listen(5000, ()=>{
    console.log("App Is Running");
});