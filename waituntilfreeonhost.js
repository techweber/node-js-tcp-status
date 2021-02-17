var tcpPortUsed = require('tcp-port-used');

tcpPortUsed.waitUntilFreeOnHost(44201, 'yahoo.com')
.then(function(){
	console.log('Port 80 is now free ');
}, function(err){
	console.log('Error on check : ', err.message);
});