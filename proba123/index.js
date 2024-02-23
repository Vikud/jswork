const http = require('http');
const fs = require('fs');
const htmlPagePath = 'index.html';
const htmlRegisterPage = 'register.html';
const htmlLoginPage = 'login.html';
const htmlBlogPage = 'blog.html';

const server = http.createServer((req, res) => {

    

    if(req.url === '/home'){
        fs.readFile(htmlPagePath, (err, data) => {
            if(err){
     
             res.writeHead(500);
             res.end('Ошибка сервера');
            } else {
     
             res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
             res.end(data);
            }
         });
     
         res.writeHead(200, { 'Content-Type' : 'text/plan; charset=utf-8' });
    }

    if(req.url === '/register') {
        fs.readFile(htmlRegisterPage, (err, data) => {
            if(err){
     
             res.writeHead(500);
             res.end('Ошибка сервера');
            } else {
     
             res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
             res.end(data);
            }
         });
     
         res.writeHead(200, { 'Content-Type' : 'text/plan; charset=utf-8' });
    }
    if(req.url === '/blog') {
        fs.readFile(htmlBlogPage, (err, data) => {
            if(err){
     
             res.writeHead(500);
             res.end('Ошибка сервера');
            } else {
     
             res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
             res.end(data);
            }
         });
     
         res.writeHead(200, { 'Content-Type' : 'text/plan; charset=utf-8' });
    }
    if(req.url === '/login') {
        fs.readFile(htmlLoginPage, (err, data) => {
            if(err){
     
             res.writeHead(500);
             res.end('Ошибка сервера');
            } else {
     
             res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
             res.end(data);
            }
         });
     
         res.writeHead(200, { 'Content-Type' : 'text/plan; charset=utf-8' });
    }

    // res.end('авы');
});

server.listen(3000, () => {
    console.log('Сервер запущен на порте 3000');
});``