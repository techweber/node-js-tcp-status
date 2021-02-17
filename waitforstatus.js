var tcpPortUsed = require('tcp-port-used');

var inUse = true;
tcpPortUsed.waitForStatus(80, '127.0.0.1', inUse)
.then(function(){
	console.log('Port 80 is in use... ');
}, function(err){
	console.log('Error on check : ', err.message);
});