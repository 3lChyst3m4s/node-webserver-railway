/* 
app.get('/', function(req, res) {
    res.send('Home Page')
})

app.get('/hola-mundo', function(req, res) {
    res.send('Hola Mundo en su respectiva ruta')
})

app.get('*', function(req, res) {
    res.send('404 | Page not found')
})

app.listen(8080)
 */


/* 
//Para servir contenido estatico
app.use(express.static('public')); //Definición de midelware express. si public en otro sitio especificar path
//app.get('/', (req, res) => {
//    res.send('Home Page')
//})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
})

app.get('*', (req, res) => {
    //res.send('404 | Page not found')
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening al http://localhost:${port}`)
})
*/


/* 
//Para servir contenido estatico
app.use(express.static('public')); //Definición de midelware express. si public en otro sitio especificar path

app.get('/generic', (req, res) => {
    res.send('404 | Page not found')
    res.sendFile(__dirname + '/public/generic.html');
})
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
})
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening al http://localhost:${port}`)
})
*/


const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;

//handlebar
app.set('view engine', 'hbs'); //Para usar el handlebars para express
hbs.registerPartials(__dirname + '/views/partials'); //Para usar parciales

//Para servir contenido estatico
app.use(express.static('public')); //Definición de midelware express. si public en otro sitio especificar path

app.get('/', (req, res) => {
    res.render('home', { //Estos son los argumentos
        nombre: 'Mauro Retuerto',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', { //Estos son los argumentos
        nombre: 'Mauro Retuerto',
        titulo: 'Curso de Node'
    });
})
app.get('/elements', (req, res) => {
    res.render('elements', { //Estos son los argumentos
        nombre: 'Mauro Retuerto',
        titulo: 'Curso de Node'
    });
})
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening al http://localhost:${port}`)
})

