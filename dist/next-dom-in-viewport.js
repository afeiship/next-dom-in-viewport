(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.domInViewport = function (inElement, inOffset) {
    var box = inElement.getBoundingClientRect();
    var top = (box.top >= 0);
    var left = (box.left >= 0);
    var bottom = (box.bottom <= (window.innerHeight || document.documentElement.clientHeight) + inOffset);
    var right = (box.right <= (window.innerWidth || document.documentElement.clientWidth) + inOffset);
    return (top && left && bottom && right);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.domInViewport;
  }

}());
