const states = [
    {id: 1, name:'Rio grande do sul', uf:'RS'},
    {id: 2, name: 'santa catarina', uf:'SC'}
];

// poderia ser o id e etc...e ele vai retornar outro array
let names = states.map(x => x.name);