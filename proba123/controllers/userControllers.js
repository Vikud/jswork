const User = require('../models/userModels');
async function createUser(username, email, age){
    try{
        const newUser = new User({
            username: username,
            email: email,
            age: age,
        });
        await newUser.save();
        console.log('Пользователь успешно создан');
        } catch (error) {
            console.error('Ошибка при создании пользователя: ', error);
        }
}

module.exports = {
    createUser,
};