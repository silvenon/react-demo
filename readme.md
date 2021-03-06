# React Demo

```sh
$ npm install
$ npm test
```

This is a demo for 2 bugs I've encountered while trying to set up React testing with [jsdom](https://github.com/tmpvar/jsdom):

  1. Document context leaks between tests if the require cache is not cleared.
  2. If the require cache **is** cleared, using [refs](https://facebook.github.io/react/docs/more-about-refs.html) fails.

The 1st issue was pointed out in [MochaJsdomReact](https://github.com/Munter/MochaJsdomReact/blob/master/test/test-1.js) by @Munter and a solution is provided [here](http://stackoverflow.com/a/30544088/1247274).

But with that solution the 2nd issue arises when using refs:

```
Error: Invariant Violation: addComponentAsRefTo(...): Only a ReactOwner can have refs. This usually means that you're trying to add a ref to a component that doesn't have an owner (that is, was not created inside of another component's `render` method). Try rendering this component inside of a new top-level component which will hold the ref.
```

---

To reproduce 1st issue, remove this part from `helpers/dom.js`:

```js
for (var key in require.cache) {
  if (key.match(/\/node_modules\/react\//)) {
    delete require.cache[key];
  }
}
```
