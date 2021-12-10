const aluno = require('./aluno');

const bruno = new aluno.construtor('Bruno', 1, [8, 8, 9]);
aluno.aumentarFaltas(bruno); // bruno teve uma falta extra

const gabriel = new aluno.construtor('Gabriel', 9, [6, 9, 4]);

const patricia = new aluno.construtor('Patricia', 2, [4, 8, 9]);
aluno.aumentarFaltas(patricia); // bruno teve uma falta extra

const laura = new aluno.construtor('Laura', 2, [10, 7, 9]);


/*
let listaAlunos = [];

listaAlunos.push(
    bruno,
    gabriel,
    patricia,
    laura,
)*/

module.exports ={
    bruno,
    gabriel,
    patricia,
    laura,
}