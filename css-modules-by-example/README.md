CSS Modules by Example
---

These are the example components shown in my [CSS Modules by Example](http://andrewhfarmer.com/css-modules-by-example/) post.



Setup
---

```
npm install
```



Running
---

1. Run `node server.js`
2. Open [http://localhost:8080](http://localhost:8080)

Changes to your Javascript will automatically rebuild webpack and reload the browser.

Note that HTML changes will require a manual reload.



Notes
---

CSS Modules take all the classes out of your `.css` file and turn them into JavaScript variables.

If you are used to SCSS, this can be a little weird.

You can't really use nested classes in the same way that you would in SCSS.

In fact, you can't specify ANY class names as strings.

```
className="meow" // this will NEVER WORK
```
