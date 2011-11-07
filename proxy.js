var http = require('http'),
    httpProxy = require('http-proxy');

var proxyServer = httpProxy.createServer(function(req, res, proxy) {
  console.log(JSON.stringify({"url": req.url, headers: req.headers}));

  host = req.headers['host'];
  if (host == "wikistream.inkdroid.org") {
    // wikistream is served up by a node app on port 3000
    port = 3000;
  } else {
    // everything else goese to Apache on port 9000
    port = 9000;
  }

  proxy.proxyRequest(req, res, {host: 'localhost', port: port});
});

proxyServer.listen(8000);
