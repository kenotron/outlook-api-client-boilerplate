/// <reference path="../../typings/tsd.d.ts" />
"use strict";
let path = require('path');

import express = require('express');

let webpack = require('webpack');
let webpackMiddleware = require('webpack-dev-middleware');
let config = require('../../webpack.config.js');

let isDeveloping = process.env.NODE_ENV !== 'production';
let port = isDeveloping ? 3000 : process.env.PORT;
let app = express();

let authHelper = require('./authHelper'); 

app.get('/authUrl', function(req, res) {
    res.send(authHelper.getAuthUrl());
});

var url = require("url");
app.get('/authorize', function(request, response) {
    console.log("Request handler 'authorize' was called.");
  
    // The authorization code is passed as a query parameter
    var url_parts = url.parse(request.url, true);
    var code = url_parts.query.code;
    console.log("Code: " + code);
    authHelper.getTokenFromCode(code, tokenReceived, response);
});

function tokenReceived(response, error, token) {
    if (error) {
        console.log("Access token error: ", error.message);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write('<p>ERROR: ' + error + '</p>');
        response.end();
    }
    else {
        response.writeHead(302, { 'Location': `http://localhost:3000/#/authorize/${token.token.access_token}/${authHelper.getEmailFromIdToken(token.token.id_token)}`});
        response.end();
    }
}

if (isDeveloping) {
    let compiler = webpack(config);
    let middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    app.use(middleware);
    app.use(require('connect-livereload')({
        src: "http://localhost:35729/livereload.js?snipver=1",   
    }));
    app.use(express.static('public'));
    app.get('*', function response(req, res) {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });
} else {
    app.use(express.static('public'));
    app.get('*', function response(req, res) {
        res.sendFile(path.join(__dirname, 'public/index.html'));
    });
}

app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
