//concatenar
const a1 = [1,2,3];
const a2 = [4,5,6]
// const a3 = a1.concat(a2, [7,8,9], 'luiz')

//usando o spread eu espalho o array, entendeu?
const a = [...a1,...a2,//[7,8,9]se eu deixar assim vai ficar um array literal
...[7,8,9]
]

console.log(a3)

//rest