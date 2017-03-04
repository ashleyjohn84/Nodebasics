var http = require('http');

console.log('Going to make request');

var req = http.request("http://www.google.co.in/",function(response){
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

req.end();