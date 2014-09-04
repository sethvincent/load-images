var test = require('tape');
var loadImages = require('./');

test('should load images', function (t) {
  t.plan(2);

  loadImages(['zombie-baby.png', 'zombie-baby2.png'], function(err, images){
    t.ok(images);
    t.notOk(err);
  });
})
