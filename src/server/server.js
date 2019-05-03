const express = require('express');
const app = express();
const ids = require('short-id');
const bodyParser = require('body-parser');
const Links = require('./models/mongodb');


//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Db related Code
const Keys = require('./config/keys');
const mongoose = require('mongoose');
const db = Keys.mongoURI;
mongoose.connect(db)
    .then(success => console.log('db Connected' + success))
    .catch(error => console.log("there was an error" + error));

app.get('/', (req, res) => {
    Links.find().then(data => res.send(data)).catch(err => res.send(err));
});



//Get Redirected
app.get('/:id', (req, res) => {
    let urlupcomingReqId = req.params.id;
    Links.findOne({_id:urlupcomingReqId})
        .then(data => {
            if(Date.now() < data.expiryDate){
                res.status(301).redirect(data.originalUrl);
                Links.findOneAndUpdate({_id:urlupcomingReqId}, {$set:{linkOpened:data.linkOpened+1}})
                .then(()=>console.log("Success"))
                .catch(err=>console.log(err));
            }else{
                res.status(404).send("Link expired");
            } 
         }).catch(err=>res.send(err));
});


//Delete All Links
app.get('/delete/all', (req, res)=>{
    Links.remove()
    .then(success=>res.send("All Clear :-)"))
    .catch(err=>res.send(err));
});

//Create Short url
app.post('/short', (req, res, next) => {
    const newShortUrl = {
        _id: ids.generate(),
        linkOpened:0,
        shortUrl: ids.generate(),
        originalUrl: req.body.originalUrl,
        createdDate: Date.now(),
        expiryDate: Date.now() + (30*24*60*60*100)
    };
    Links.create(newShortUrl)
        .then(url => res.send(newShortUrl))
        .catch(err => res.send(err));
});

//Premium Service
app.get('/premium/:id', (req, res)=>{
    let urlupcomingReqId = req.params.id;
    Links.findByIdAndUpdate(urlupcomingReqId, { $set: { expiryDate: 1675276200000}}).then(data=>res.send(data)).catch(err=>res.send(err));
});


//Running
app.listen(5000, () => {
    console.log("App Is Running");
});