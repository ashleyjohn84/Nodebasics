process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data',function(chunk){
    process.stdout.write('Data! ->'+chunk);
})

process.stdin.on('end',function(){
    process.stdout.write('End');
})