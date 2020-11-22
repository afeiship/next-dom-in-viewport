/*!
 * name: @jswork/next-element-in-viewport
 * description: Detect element if is in viewport.
 * homepage: https://github.com/afeiship/next-element-in-viewport
 * version: 1.0.0
 * date: 2020-11-22 17:45:43
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.elementInViewport = function (inElement, inOptions) {
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
    module.exports = nx.elementInViewport;
  }
})();
