# virtual-dom-loader
A virtual-hyperscript, used in virtual-dom, to JSX converter for Webpack

*webpack.config.js*
```js
module.exports = {
  entry: './app.js',
  output: {
    path: './build',
    filename: 'main.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'virtual-dom'
    }]
  }
};
```

*someFile.js*
```js
var h = require('virtual-dom/h');
var createElement = require('virtual-dom/create-element');

var node = createElement(
  <h1>Hello world</h1>
);

document.body.appendChild(node);
```

## Options

### JSX
Set the function that will create the virtual elements.
```js
{
  test: /\.js$/,
  loader: 'virtual-dom?jsx=someLib.DOM'
}
```

Please send pull requests if you need more options.
