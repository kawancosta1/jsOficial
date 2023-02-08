//cada vez que eu chamar ela, um valor diferente irá aparecer 
function* geradora1() {
    //codigo qualquer 

    yield 'valor 1';
     //codigo qualquer 
    
    yield 'valor 2';
      //codigo qualquer 
    
    yield 'valor 3';
}
//cada vez que eu chamar ela, um valor diferente irá aparecer 
const g1 = geradora1()
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)


//gerador infinito pois eu não delimitei
function* geradora2() {
    let i = 0
    while(true){
        yield i;
        i++
    }
}

const g2 = geradora2()
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)

function* geradora3(){
    yield 1;
    yield 2;
    yield 3;
}
//eu deleguei a tarefa de um gerador para outro
function* geradora4(){
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
}

const g4 = geradora4();

for(let v of g4){
    console.log(v)
}