console.log('hello world!')
document.getElementsByTagName('h1')


//de vários h1 ele vai me retornar o primeiro 
document.getElementsByTagName('h1')[0]
var currentNumberWrapper = document.getElementById("currentNumber");
var count = 0;





function increment(){
    currentNumber = count++;
    currentNumberWrapper.innerHTML = count;

}



function decrement(){
    currentNumber = count--;
    currentNumberWrapper.innerHTML = count;

}
