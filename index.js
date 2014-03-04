module.exports = function loadImages(images, callback){
	var list = [];
  if (typeof images === 'string') list = [images];
  else list = [].slice.call(images);

  var count = 0;
  var loadedImages = {};

  function loaded(){
  	count += 1;
  	if (count === list.length) callback(null, loadedImages);
  }

  for (var i=0; i<list.length; i++){
  	var img = new Image();

    img.onerror = function(){
      callback('images not loaded');
    }

    img.onabort = function(){
      callback('images not loaded');
    }

  	img.onload = function(){
  		loaded();
  	}

  	img.src = list[i];
  	img.name = list[i].slice(list[i].lastIndexOf('/')+1);
  	loadedImages[img.name] = img;
  }
}