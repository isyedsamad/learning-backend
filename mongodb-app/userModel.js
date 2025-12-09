const mongoose = require('mongoose');

//* used to connect to the db
mongoose.connect('mongodb://127.0.0.1:27017/mongo-practice');

//* user schema
const userSchema = mongoose.Schema({
    name: String,
    mail: String,
    username: String,
})

//* create a new collection
module.exports = mongoose.model('user', userSchema);