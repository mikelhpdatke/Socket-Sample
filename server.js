var http = require('http'),

    socketIO = require('socket.io'),

    port = process.env.PORT || 8080,

    ip = process.env.IP || '127.0.0.1',

    server = http.createServer().listen(port, ip, function () {

        console.log('Socket.IO server started at %s:%s!', ip, port);

    }),

    io = socketIO.listen(server);

io.set('match origin protocol', true);

io.set('origins', '*:*');

io.set('log level', 1);
var d=[];
d['0']='Không';
d['1']='Một';
d['2']='Hai';
d['3']='Ba';
d['4']='Bốn';
d['5']='Năm';
d['6']='Sáu';
d['7']='Bảy';
d['8']='Tám'
d['9']='Chín';

io.sockets.on('connection', (socket) => {
    console.log('Có một thiết bị vừa kết nối');
    socket.on('chat', function (data) {
        socket.emit('greeting', d[data]);
    })
    socket.on('disconnect', () => {
        console.log('1 Thiết bị vừa ngắt kết nối');
    })
});