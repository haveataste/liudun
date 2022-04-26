var fs = require("fs");

// fs.open(path, flags,[ mode,] callback);
fs.open("fs.js", "r+", function(err, fd){
    if(err){return console.error(err);}
    console.log("file open success!");

    var buf = Buffer.alloc(1024*2);
    // fs.read(fd, buffer, offset, length, position, callback);
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes, buf){
        if(err){return console.error(err);}
        console.log(bytes + " bytes read success!");
        if(bytes > 0){console.log(buf.slice(0, bytes).toString());}
    });

    var content = Buffer.from(new String("/* Hello world! */"));
    // fs.write(fd, buffer, offset, length, position, callback);
    fs.write(fd, content, 0, content.length, 1090, function(err, bytes, buf){
        if(err){return console.error(err);}
        console.log("file write success!");
    });

    // fs.close(fd, callback);
    fs.close(fd, function(err){
        if(err){return console.error(err);}
        console.log("file close success!");
    });
});
