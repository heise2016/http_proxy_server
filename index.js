
var httpProxy = require('http-proxy');
var modifyResponse = require('node-http-proxy-json');
var http = require('http');

var _target = 'http://';


var api_list = {};


var server = http.createServer(function (req, res) {


    if (req.url.indexOf("w2UtilAPI") != -1) {
        var proxy = httpProxy.createProxyServer({
            target: _target
        });

        if(!api_list[req.url]) {
            api_list[req.url] = {
                "api_call_time" : 0,
                "method" : 0,
                "response" : [],
            }
        }

        api_list[req.url].api_call_time ++;
        api_list[req.url].method = req.method;

        proxy.on('proxyRes', function (proxyRes, req, res) {

            if (proxyRes.headers['content-type'].indexOf("application/json") != -1) {

                modifyResponse(res, proxyRes, function (body) {
                    // if (body) {
                    //     // modify some information
                    //     body.age = 2;
                    //     body.haha = 2;
                    //     delete body.version;
                    // }

                    api_list[req.url].response.push(body);

                    return body; // return value can be a promise
                });

            }

        });

        proxy.web(req, res);

    } else if (req.url.indexOf("debug_mode")) {
        res.writeHead(200, { 'Content-Type': 'text/json; charset=utf-8' });
        res.write(JSON.stringify(api_list));
        res.end();
    } else
        res.end();



}).listen(5050);

