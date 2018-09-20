# next-element-in-viewport
> Judge element if is in viewport

## install:
```bash
npm install -S afeiship/next-element-in-viewport --registry=https://registry.npm.taobao.org
```

## resouces:
+ https://github.com/egoist/element-in-view

## usage:
```js
import nxElementInViewport from 'next-element-in-viewport';

window.addEventListener('scroll', () => {
  nxElementInViewport(element);
  //=> true or false
});
```
