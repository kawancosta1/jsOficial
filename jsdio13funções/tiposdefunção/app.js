// função autoinvocável, ela se chama né

(
    function(){
        let name = "Digital Innovation One"
        return name
    }
)();

(
    function(a, b){
        return a + b;
       
    }
)(1,2);

const soma2 = (
    function(a, b){
        return a + b;
       
    }
)(1,2);

// callbacks, função passada como argumento para outra.
const calc = function(operacao,num1,num2){
    return operacao(num,num2);
}

const soma = function(num1,num2){
    return num1 + num2;
}
const sub = function(num1,num2){
    return num1 - num2;
}

const somaresult = calc(soma,1,2);
const subresult = calc(sub,2,3);

console.log(somaresult);
console.log(subresult);