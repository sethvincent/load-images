# load-images

Preload images for use in games, animations, etc.

## Install

```
npm install --save load-images
```

## Usage

```
var loadImages = require('load-images');

var loaded;
loadImages(arrayOfImagePaths, function(err, images){
	if (err) throw err;
	loaded = images;
	// start game or animation
});
```

The images argument is an object where each key is the filename of the image and the value is the img object.

## Recommended modules

Take a look at the [crtrdg.js project at crtrdg.com](http://crtrdg.com) as well as the [game-modules wiki](https://github.com/hughsk/game-modules/wiki).

## License
MIT