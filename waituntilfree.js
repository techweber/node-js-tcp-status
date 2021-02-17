var tcpPortUsed = require('tcp-port-used');

tcpPortUsed.waitUntilFree(80, '127.0.0.1')
.then(function(){
	console.log('Port 80 is now free ');
}, function(err){
	console.log('Error on check : ', err.message);
});