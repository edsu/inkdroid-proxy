var http = require('http'),
    httpProxy = require('http-proxy');

var options = {
    router: {
        'wikistream.inkdroid.org': '127.0.0.1:3000',
        'inkdroid.org': '127.0.0.1:9000',
        'linkypedia.inkdroid.org': '127.0.0.1:9000',
        'linkypedia.info': '127.0.0.1:9000',
    }
}

var proxyServer = httpProxy.createServer(options).listen(8000);
