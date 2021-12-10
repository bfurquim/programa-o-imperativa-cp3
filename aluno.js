//Desafio 1 - Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

const aluno = {
    nome: '',
    quantidadeFaltas: 0,
    notas: [],
    construtor: function(nome, faltas, notas) {
        this.nome = nome;
        this.quantidadeFaltas = faltas;
        this.notas = notas; // atributo fora de aluno
    },
    //Desafio 2 - Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
    
    calcularMedia: function(aluno) {
        let total = 0;

        aluno.notas.forEach(nota => {
            total += nota;
        });

        return total/aluno.notas.length;
    },
    aumentarFaltas: function(aluno) {
        aluno.quantidadeFaltas++;
    }

}

module.exports = aluno;

