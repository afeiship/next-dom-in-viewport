# next-element-in-viewport
> Detect element if is in viewport.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-element-in-viewport
```

## usage
```js
import '@jswork/next-element-in-viewport';

// scroll into view when element not in the viewport
const el = document.querySelector('.to-scroll-element');
if (el && !nx.elementInViewport(el)) {
  el.scrollIntoView();
}
```

## resources
- https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport

## license
Code released under [the MIT license](https://github.com/afeiship/next-element-in-viewport/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-element-in-viewport
[version-url]: https://npmjs.org/package/@jswork/next-element-in-viewport

[license-image]: https://img.shields.io/npm/l/@jswork/next-element-in-viewport
[license-url]: https://github.com/afeiship/next-element-in-viewport/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-element-in-viewport
[size-url]: https://github.com/afeiship/next-element-in-viewport/blob/master/dist/next-element-in-viewport.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-element-in-viewport
[download-url]: https://www.npmjs.com/package/@jswork/next-element-in-viewport
