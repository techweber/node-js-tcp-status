var tcpPortUsed = require('tcp-port-used');

tcpPortUsed.check(80, '127.0.0.1')
.then(function(inUse){
	console.log('Port 80 usage : '+ inUse);
}, function(err){
	console.log('Error on check : ', err.message);
});