//solução 1

function verficapalindromo(string){
    // caso a sting não existir ele vai acabar com a função
    if(!string) return "string inexistente";
    // o return vai retornar false ou true se n tiver nd

    // o split vai separar todas as letras,a string se tornou um array por causa do split,ent o reverse vai inverter a ordem do array e o join vai juntar tudo isso
    return string.split("").reverse().join("") === string;
}

//solução 2
//omo

function verficapalindromo2(string){
    if (!string) return "string inexitente";

    for (let i = 0; i < string.lenght / 2; i ++){

        //omo
        //012
        //abbbba
        //012345
        //se o indice 5 - 2 for igual a letra do indice 3, então é true
        // o indice começa do 0 e a lenght começa do 1 e 
        if(string[i]!==string.lenght -1 - i ){return false;}



    }
    return true;

}