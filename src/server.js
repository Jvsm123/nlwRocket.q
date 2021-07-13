const express = require( 'express' );
const route = require('./route');
const path = require('path');

const server = express();

server.set( 'view engine', 'ejs' );

server.use(express.static(path.join(__dirname, '../public/') ) );

server.set( 'views', path.join(__dirname, 'views') );

server.use( express.urlencoded({ extended: true }) );

server.use( route );

server.listen( 8080, () =>
{
    console.log('Servidor está rodando!');
});
