var maxTime =1000;

var evenDoubler = function (input,callback){
    var waitTime = Math.floor(Math.random()*(maxTime+1));

    if (input % 2 == 0){
        setTimeout(function(){callback(null,input*2,waitTime);},waitTime);
    }
    else{
        setTimeout(function(){ callback(new Error('Odd Input'),null,waitTime);},waitTime);
    }
}

/*evenDoubler(7,(error,result) => {
    if(error == null)
        console.log(result);
    else
         console.log(error);
});*/

module.exports.evenDoubler = evenDoubler;
module.exports.foo ="bar";