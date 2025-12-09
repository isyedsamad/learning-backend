const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongo-practice-auth');
const userSchema = mongoose.Schema({
    name: String,
    mail: String,
    username: String,
    password: String,
    image: String
})
module.exports = mongoose.model('user', userSchema);