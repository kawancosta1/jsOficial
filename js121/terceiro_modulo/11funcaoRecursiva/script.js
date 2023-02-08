function recursiva(max) {
    if(max >= 10)return;
    max++;
    console.log(max)
    recursiva(max)
    //vai funcionar igual a uma estrutura de repetição, tlg?
}

recursiva(-10)