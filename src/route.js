const express = require( 'express' );
const questionController = require('./controllers/questionController');
const roomController = require('./controllers/newRoomController');

const route = express.Router();

//GET
route.get('/', ( req, res ) => res.render('home', {page: 'room'}) );
route.get('/pass', ( req, res ) => res.render('home', {page: 'pass'}) );
route.get('/room/:id', roomController.open);

//POST
route.post('/enterroom', roomController.enter);
route.post( '/room/new-room', roomController.tratamento );
route.post('/room/create/:room', questionController.criar);
route.post( '/room/:room/:question/:action', questionController.tratamento );

module.exports = route;
