var express = require('express');
var path = require('path');
var app = express();
var compression = require('compression');

app.use(compression());

var rootPath = path.normalize(__dirname + '/../');
app.use(express.static(path.join(rootPath, 'dist')));


app.get('*', function (req, res) {
    res.set("Content-Encoding", "gzip");
    res.sendFile(path.join(rootPath, 'dist', 'index.html'));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});