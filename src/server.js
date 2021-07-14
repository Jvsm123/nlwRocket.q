const express = require( 'express' );
const route = require('./route');
const path = require('path');

const server = express();

//Usando Template ejs
server.set( 'view engine', 'ejs' );

//Definindo onde o server precisa buscar os arquivos(css, js, images...)
server.use(express.static(path.join(__dirname, '../public/') ) );

//Definindo onde o server vai buscar as views
server.set( 'views', path.join(__dirname, 'views') );

//Habilitando codificação da url para acessar POST's
server.use( express.urlencoded({ extended: true }) );

//Usando sistema de rotas em outro lugar
server.use( route );

//Ouvindo a porta
server.listen( 8080, () =>
{
    console.log('Servidor está rodando!');
});
