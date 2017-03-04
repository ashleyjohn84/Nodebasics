var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

//var s = request('http://www.ashleyjohn.in').pipe(fs.createWriteStream('ashleyjohn.html'));

var s1 = request('http://www.ashleyjohn.in').pipe(zlib.createGzip())
        .pipe(fs.createWriteStream('ashleyjohn.html.gz'));
/*
s.on('data',function(chunk){
    console.log(">>>>DATA>>>> "+chunk);
    console.log("***************************************************************************");
})  

s.on('end',function(){
    console.log(">>>>DONE>>>>!!");
})  
*/

//s.pipe(process.stdout);

process.stdout.write("Just to test");