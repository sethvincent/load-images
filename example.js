var Game = require('gameloop');
var loadImages = require('./');

var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

var game = new Game({
	renderer: canvas.getContext('2d')
});

game.width = canvas.width = 800;
game.height = canvas.height = 400;

loadImages(['zombie-baby.png', 'zombie-baby2.png'], function(err, images){
	console.log(err, images);
	game.images = images;
	game.start();
});

game.on('draw', function(context){
	context.drawImage(game.images['zombie-baby.png'], 50, 50);
	context.drawImage(game.images['zombie-baby2.png'], 100, 100);
});