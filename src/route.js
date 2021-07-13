const express = require( 'express' );
const questionController = require('./controllers/questionController');
const roomController = require('./controllers/newRoomController');

const route = express.Router();

//GET
route.get('/', ( req, res ) => res.render('home', {page: 'room'}) );

route.get('/pass', ( req, res ) => res.render('home', {page: 'pass'}) );

route.get('/room/:id', ( req, res ) => res.render('room', {req}) );

//POST
route.post( '/room/new-room', roomController.tratamento );
route.post( '/room/:room/:question/:action', questionController.tratamento );

module.exports = route;
