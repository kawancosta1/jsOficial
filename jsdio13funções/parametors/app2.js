
// sem paramretros pq n se sabe quantos parametros vão vir
function findmax(){
    // menos infinito para garantir que os valores podem ser positivos e negativos
    let max = -Infinity;
// o arguments vai dar todos os parametros enviados(eu n determinei nenhum parametro, por isso coloquei o arguments)
    for(let i = 0; i  <arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        
    

  
        }
        return max;
    }
}

function showArgs(){
    return arguments;
}
// ARRAYS


// spread, uma forma de mandar um array para um parametro numa função

function soma(x, y , z){

return x + y + z;
}

const numbers = [1, 2, 3]

// os 3 pontinhos são o spread
console.log(sum(...numbers));


// Rest, combina os argmentos em um array, e você usa quando vc ta declarando a função, diferente do spread

function conferetamanho(...args){
    console.log(args.length)
}

conferetamanho() // 0
conferetamanho(1,2)// 2

// OBJETOS

// object destructuring

const user = {
    id:42,
    displayname:'jdoe',
    fullname: {
        firstname: 'john',
        lastname:'dicked'
    }
};

function userId({id}){
    return id;
}

// eu fiz o first name ser first e lastamen ser last, destruturei o objeto fullname
function getFullName({FullName:{firstname: first, lastname: last}}){
    return `${first} ${last}`
}
