Context Callback
---

Shows how callback functions can be used with React's [context](https://facebook.github.io/react/docs/context.html) feature.

This project was created in response to a question about my [component communication](http://andrewhfarmer.com/component-communication/) post, particularly, the [context section](http://andrewhfarmer.com/component-communication/#8-context).



Setup
---

```
npm install
```



Running
---

```
node server.js
```

Open [http://localhost:8080](http://localhost:8080) and you should see this:

<img src='galaxy.png' width='116' height='257' />



About the Code
---

In this project we use context to allow a parent node to be notified when a particular event occurs in one of the components in its subtree.

Notice that clicking on any of the planets prints a message to the console. That console message is in `Galaxy.js`.

Component hierarchy looks like: `Galaxy -> SolarSystem -> Planet`

`Galaxy.js` defines `getChildContext()` and `childContextTypes`. This specifies what `context` is available to it's subtree. `planetClickHandler` is the method that is passed down in the context.

`SolarSystem.js` is an intermediary component that doesn't do much. Its purpose is to separate the `Galaxy` from the `Planet`.

`Planet` calls the `planetClickHandler` context callback method, which is defined 2 levels up in `Galaxy`.
