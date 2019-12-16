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
if (el && !nx.elementInViewport(el)) {
  el.scrollIntoView();
}
```

## resources
- https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport
