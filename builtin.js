var os = require('os');
var mathfun = require('./mathfun')
var request = require('request');

var toMb= function(f){
    return (Math.round((f/1024/1024)*100)/100);
}

console.log('Host :'+ os.hostname());
console.log('15 min load average: '+os.loadavg()[2]);
console.log(toMb(os.freemem()) +' of '+ toMb(os.totalmem())+'Mb free');

for(var i =0;i<10;i++)
{
    console.log("Calling EvenDoubler with parameter"+i)
    mathfun.evenDoubler(i,(error,results,waittime) =>{
        if(error)
        {
            console.log("ERROR: "+error.message+" WaitTime:"+waittime)
        }
        else{
            console.log("Results: "+results+" WaitTime:"+waittime)
        }
    });
}

request("http://www.pluralsight.com",function(error,response,body){
    if(!error && response.statusCode == 200){
        console.log(body);
    }
});