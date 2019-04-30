const mongoose  = require('mongoose');
const {Schema} = mongoose;

//short Url Format
const shortURL = new Schema({
    originalUrl:{
        type: String,
        required:true
    },
    shortUrl: {
        type: String,
        required: true
    },
    expiryDate: {
        type: Date
    },
    createdDate:{
        type: Date,
        default: Date.now
    }
});
const allUrls = mongoose.model('allUrls', shortURL);
module.exports = allUrls;