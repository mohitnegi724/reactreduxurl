const express  = require('express');
const app = express();
const ids = require('short-id');
const bodyParser = require('body-parser');
const Links = require('./models/mongodb');

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Db related Code
const Keys = require('./config/keys');
const mongoose = require('mongoose');
const db = Keys.mongoURI;
mongoose.connect(db)
.then(()=>console.log('db Connected'))
.catch((error) => console.log("there was an error" + error));

app.get('/', (req, res)=>{
    Links.find().then(data=>res.send(data)).catch(err=>res.send(err));
});


app.get('/:id', (req, res)=>{
    let urlupcomingReqId = req.params.id;
    Links.findById(urlupcomingReqId)
    .then(data=>{
        res.status(500).redirect(data.originalUrl);
    }).catch(err=>res.send("This Link Doesn't Exist In Our Database"));
});

//Create Short url
app.post('/short', (req, res, next)=>{
    const newShortUrl ={
        _id: ids.generate(),
        shortUrl: ids.generate(),
        originalUrl: req.body.originalUrl,
        createdDate:Date.now()
    };
    Links.create(newShortUrl)
    .then(url=> res.send(newShortUrl))
    .catch(err=>res.send(err));
});


//Running
app.listen(5000, ()=>{
    console.log("App Is Running");
});