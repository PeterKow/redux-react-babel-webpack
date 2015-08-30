/**
 * Created by Peter on 30/08/15.
 */

export default function init(app) {
  var httpProxy = require('http-proxy');
  var proxy = httpProxy.createProxyServer();
  var isProduction = process.env.NODE_ENV === 'production';

// We only want to run the workflow when not in production
  if (!isProduction) {

    // We require the bundler inside the if block because
    // it is only needed in a development environment. Later
    // you will see why this is a good idea
    var bundle = require('./src/server/bundle.js');
    bundle();

    // Any requests to localhost:3000/build is proxied
    // to webpack-dev-server
    app.all('/build/*', function (req, res) {
      proxy.web(req, res, {
        target: 'http://localhost:8080'
      });
    });
  }

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
  proxy.on('error', function (e) {
    console.log('Could not connect to proxy, please try again...');
  });

  return!isProduction;

}