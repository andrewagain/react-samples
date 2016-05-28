autoprefixer sandbox
---
https://github.com/postcss/autoprefixer

A test to see what autoprefixer will print out when given different values for it's "browsers" option.

I was particularly interested in `display: flex` and iOS 8, because a client of mine wanted iOS 8 support, and I know that iOS 8 requires `display: flex` to be converted to `display: -webkit-flex;`.



Usage
---

```
node experiment.js
```



Results
---

`display: -webkit-flex` shows up in the CSS output when you add `iOS >= 8` to the browsers list.
