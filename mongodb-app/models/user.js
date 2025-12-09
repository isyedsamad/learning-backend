const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mongo-practice-2');
const userSchema = mongoose.Schema({
    name: String,
    mail: String,
    username: String,
    image: String
})
module.exports = mongoose.model('user', userSchema);