const mongoose  = require('mongoose');
const {Schema} = mongoose;

//short Url Format
const shortURLSchema = new Schema({
    _id:{
        type:String,
        unique:true
    },
    linkOpened:Number,
    expiryDate: Date,
    originalUrl:String,
    shortUrl: String,
    createdDate:{
        type: Date,
        default: Date.now,
        required: true
    }
});
const allUrls = mongoose.model('allUrls', shortURLSchema);
module.exports = allUrls;