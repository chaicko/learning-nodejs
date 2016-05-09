"use strict";
const
  net = require('net'),
  filename = process.argv[2],
  server = net.createServer(function(connection) {
	  //reporting
	  console.log("Subscriber connected");
	  connection.write(
	  	'{"type":"changed","file":"targ'
	  );
	  let timer = setTimeout(function () {
	  	connection.write('et.txt,"timestampt":1358175758495}' + "\n");
	  	connection.end();
	  }, 1000);
	  //cleanup
	  connection.on("close", function() {
	  	  clearTimeout(timer);
		  console.log("Subscriber disconnected.");

	  });
  });

server.listen(5432, function() {
	console.log("Listening for subscribers...");
});

