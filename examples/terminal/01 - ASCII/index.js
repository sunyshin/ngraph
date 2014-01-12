module.exports.main = function () {
  var symbolSize = require('./lib/getSymbolSize')();
  var ascii = require('ngraph.ascii');

  var scene = document.getElementById('scene');

  var screenSize = getSceneSize(scene, symbolSize);
  var screen = ascii.arrayScreen(screenSize.width - 2, screenSize.height - 2, renderScene)

  ascii.graphics(require('ngraph.generators').grid(10, 10), { screen: screen })
       .run();

  function renderScene(chars) {
    var width = screen.width();
    var text = [];
    for (var row = 0; row < screen.height(); ++row) {
      text.push(chars.slice(row * width, (row + 1) * width).join(''));
    }
    scene.innerText = text.join('\n');
  }
}

function getSceneSize(scene, symbolSize) {
  return {
    width: (scene.offsetWidth/symbolSize.width)|0,
    height: (scene.offsetHeight/symbolSize.height)|0
  };
}
