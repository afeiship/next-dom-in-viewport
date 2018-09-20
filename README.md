# next-dom-in-viewport
> Judge element if is in viewport

## install:
```bash
npm install -S afeiship/next-dom-in-viewport --registry=https://registry.npm.taobao.org
```

## resouces:
+ https://github.com/egoist/element-in-view

## usage:
```js
import nxDomInViewport from 'next-dom-in-viewport';

window.addEventListener('scroll', () => {
  nxDomInViewport(element);
  //=> true or false
});
```
