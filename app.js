var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var request = require('request');
var sixrooms = require('./crawler/sixroom');
var eventEmitter = require('events').EventEmitter;
var myEvents = new eventEmitter();

var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
// var cheerio = require('cheerio');
var config = require('./config');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var rooms = [];
var times = [];
var length = 0;

myEvents.on("gethost", function (room, rid) {
    request('http://v.6.cn/coop/mobile/index.php?ruid=' + rid + '&padapi=coop-mobile-chatConf.php', function (error, response, body2) {
        if (error) {
            return console.log(error.message);
        }
        var parse2 = JSON.parse(body2);
        var host = parse2.content.websock[0];
        // console.log('room: ' + room + ' rid: ' + rid + ' host: ' + host);
        new sixrooms(room, rid, host);
    })
});

myEvents.on("islive", function (room) {
    request('http://v.6.cn/coop/mobile/index.php?rid=' + room + '&padapi=coop-mobile-inroom.php', function (error, response, body1) {
        if (error) {
            return console.log(error.message);
        }
        var parse1 = JSON.parse(body1);
        var type = parse1.content.liveinfo.type;
        // console.log('room: ' + room + ' type: ' + type);
        if (type) {
            var rid = parse1.content.liveinfo.content["1"].red.uid;
            // console.log('type: ' + type + ' rid: ' + rid);
            myEvents.emit('gethost', room, rid);
        }
        //
    })
});

request('http://120.27.94.166:2999/getRooms?platform=sixrooms&topn=' + config.topn, function (error, response, body) {
    if (error) {
        return console.log(error);
    }
    var parse = JSON.parse(body);
    length = parse.data.length;

    for (var i = 0; i < length; i++) {
        var roomId = parse.data[i].room_id;
        rooms.push(roomId);
    }

    rule.second = times;
    for (var i = 0; i < 60; i++) {
        times.push(i);
    }

    // console.log("-------------");
    var count = 0;
    schedule.scheduleJob(rule, function () {
        if (count >= length) {
            count = 0;
            this.cancel();
            return;
        }
        myEvents.emit("islive", rooms[count++]);
    });

});

module.exports = app;
