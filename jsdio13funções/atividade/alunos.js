const alunos = [
    {
        nome:'joao',
        nota:5,
        turma:'1b'
    },
    {
        nome:'Sofia',
        nota:9,
        turma:'1b'
    },
    {
        nome:'Paulo',
        nota:6,
        turma:'2c'
    },
    {
        nome:'Miguel',
        nota:3,
        turma:'2c'
    },
];


function alunosaprovados(arr,media){
    let aprovados = [];


    // assim eu facilito quando eu for pegar essas propiedades e ajudo a memória, ou seja, n faço ela verificar o turma

    for(  let i = 0; i < arr.lenght; i++){
        const {nota,nome} = arr[i];
        if(nota >= media){
        aprovados.push(nome);
    }
   
}
return aprovados;
}

console.log(alunosaprovados(alunos,5));