Toy repo for playing around with Babel/Webpack.

To iterate on the demo, run:

    webpack-dev-server --hot --inline --progress --colors

And then load http://localhost:9090/dist/demo.html

To iterate on the tests, run:

    webpack-dev-server --hot --inline --progress --colors

And then load http://localhost:9090/dist/runner.html

To build a "production" bundle, run:

    webpack --config webpack.config.prod.js &&
    webpack --config webpack.config.prod.min.js
