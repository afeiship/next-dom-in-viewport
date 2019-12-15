# next-element-in-viewport
> Judge element if is in viewport.

## installation
```bash
npm install -S @feizheng/next-element-in-viewport
```

## usage
```js
import '@feizheng/next-element-in-viewport';

// scroll into view when element not in the viewport
const el = document.querySelector('.to-scroll-element');
if (!nx.elementInViewport(el)) {
  el.scrollIntoView();
}
```
