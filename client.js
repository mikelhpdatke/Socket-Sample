var socket = require('socket.io-client')('http://127.0.0.1:8080');
socket.on('connect', function(){
    console.log("Da ket noi noi server");
});
socket.on('greeting', function(data){
    console.log(`
    Server response: ${data}`);
})
socket.on('disconnect', function(){
    console.log("Da huy ket noi noi server");
});
// var stdin = process.openStdin(); 
// stdin.setRawMode( true );  
// stdin.resume();
// stdin.setEncoding( 'utf8' );
// stdin.on( 'data', function( key ){
//     // ctrl-c ( end of text )
//     if ( key === '\u0003' ) {
//         console.log('??');
//       process.exit();
//     }
//     // write the key to stdout all normal like
//     socket.emit('chat',key);
//     // process.stdout.write( key );
//   });
  
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    // console.log(line);
    socket.emit('chat', line);
})