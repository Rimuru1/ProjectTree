var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/insurane', { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
    console.log('mongoose default connection open');
});

mongoose.connection.on('error', function (err) {
    console.log('mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('mongoose default connection fuck: ');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('gitititktkriotgjoritjgo');
        process.exit(0);
    });
});