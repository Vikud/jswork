const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
// const createUser = require('./controllers/userControllers');
app.use(express.urlencoded({ extended: true }));


app.engine(
    'handlebars',
    exphbs.engine({ extnane: '.hbs', defaultLayout: 'index' })
);
app.set('view engine', '.hbs');

app.get('/about',(req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.get('/', (req, res) => {

const data = {
    title: 'Пример страницы',
    message: 'Добро пожаловать на нашу страницу!',
};
    res.render('index', data);
});

app.post('/', (req, res) => {
    createUser.createUser(
        req.body.username,
        req.body.email,
        req.body.age
    )
});


app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});