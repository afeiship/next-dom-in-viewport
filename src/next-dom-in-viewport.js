(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.domInViewport = function (inElement, inOptions) {
    var options = nx.mix({ offset: 0, threshold: 0 }, inOptions);
    var offset = options.offset;
    var threshold = options.threshold;
    var bound = inElement.getBoundingClientRect();
    var top = bound.top;
    var right = bound.right;
    var bottom = bound.bottom;
    var left = bound.left;
    var width = bound.width;
    var height = bound.height;
    var intersection = {
      t: bottom,
      r: window.innerWidth - left,
      b: window.innerHeight - top,
      l: right
    };


    var elementThreshold = {
      x: threshold * width,
      y: threshold * height
    };

    return (
      intersection.t >= (offset.top || offset + elementThreshold.y) &&
      intersection.r >= (offset.right || offset + elementThreshold.x) &&
      intersection.b >= (offset.bottom || offset + elementThreshold.y) &&
      intersection.l >= (offset.left || offset + elementThreshold.x)
    );
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.domInViewport;
  }

}());
