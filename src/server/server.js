const express  = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.get('/', (req, res, next) => res.send("Hello World Whats Up"));

app.listen(5000, ()=>{
    console.log("App Is Running");
});