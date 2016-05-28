Yargs Test
---
https://github.com/yargs/yargs

Want to test how '--blah-blah' boolean args work. The docs don't mention using a dash within an arg, so I'm not sure if it is supported.



Usage
---

```
node experiment.js --meow-mix
node experiment.js --no-meow-mix
```



Results
---

Works great! `yargs` will convert your `blah-blah` arguments into camelcase: `blahBlah`.
