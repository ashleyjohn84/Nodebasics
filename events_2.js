var Resource = require('./resource');

var r = new Resource(12);

r.on('start',function(){
    console.log('i have started !');
});

r.on('data',function(d){
    console.log('   Data received : '+d);
})

r.on('end',function(t){
    console.log('I\'m done with '+t +' events');
})