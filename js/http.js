http.createServer(function(request, response){
    var body = request.socket.remoteAddress.toString() + '\n' + request.socket.remotePort + '\n';
    var url = request.url;
    if(url === '/'){
        response.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'});
	    response.write(body);
        fs.readFile(__filename, (error, data) => {
            if(error){
                response.write('Ops, error!');
            } else{
                response.write(data);
            }
            response.end('----- END -----');
        });
    }
}).listen(3000);

console.log('Server running at http://127.0.0.1:8080/');

/*
 * var server = http.createServer();
 * server.on('request', function(req, res){});
 * server.listen(8080, function(){});
*/
