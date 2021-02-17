var tcpPortUsed = require('tcp-port-used');

tcpPortUsed.waitUntilUsed(80, '127.0.0.1')
.then(function(){
	console.log('Port 80 is in use... ');
}, function(err){
	console.log('Error on check : ', err.message);
});