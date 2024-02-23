const mongoose = require('mongoose');
const userShema = new mongoose.Shema({
    username: { type: String,required: true },
    email: { type: String, required:true },
    age: Number,
});

const User = mongoose.model('User', userShema);
module.exports = User;
