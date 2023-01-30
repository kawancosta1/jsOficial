// function maior(x,y){
//     if(x > y){
//         return `o ${x} é maior que o ${y}`
//     }
//     else if(y > x){
//        return `o ${y} é maior que o ${x}`
//     }else{
//         return `o são iguais`
//     }
// }

//ternário
function maior(x,y){
    return x > y ? `${x} é maior` : `${y} é maior`;
}
//arrow function
const max = (x,y) =>  x > y ? `${x} é maior` : `${y} é maior`;


//como eu coloquei mais de uma ocndição então eu não usei o ternário

maior(2,3)