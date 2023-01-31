//callback é basicamente função que é passada de argumento  para outra função

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num)
}
console.log(rand())

function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if(callback) callback()
    }
    , rand())
}
    
function f2(callback){
    setTimeout(function(){
        console.log('f1');
        if(callback) callback()
    }
    , rand())
}
function f3(callback){
    setTimeout(function(){
        console.log('f1');
        if(callback) callback()
    }
    , rand())
}

f1(f1callback)
f2();
f3();
setTimeout(function(){
console.log('ola mundo')}, 8000)


function f1callback(){
    f2(f2callback)
}
function f2callback(){
    f3(f3callback)
}

function f3callback(){
    console.log('olá mundo')
}