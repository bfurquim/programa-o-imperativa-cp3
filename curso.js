const aluno = require('./aluno');
const estudantes = require('./estudantes');

/*Lista de Alunos:
bruno,
gabriel,
patricia,
laura,
listaAlunos
console.log(aluno.listaAlunos)
*/

//Exercício 3 - Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma    estudantes (um array composto pelos alunos criados no passo 1).

const curso = {
    nomeCurso: 'FrontEnd I - Digital House',
    notaAprovacao: 7,
    faltasMaximas: 4,
    //Exercício 4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
    listaEstudantes: [
        estudantes.bruno,
        estudantes.gabriel,
        estudantes.patricia,
        estudantes.laura
    ],
    adicionarAluno: function(nome, faltas, notas) {
        this.listaEstudantes.push(new aluno.construtor(nome, faltas, notas));
    },
    //Exercício 5 - Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

    aprovacao: function(estudante) {
        const media = aluno.calcularMedia(estudante);

        if (
            media >= this.notaAprovacao &&
            estudante.quantidadeFaltas < this.faltasMaximas
        ) {
            return `O estudante ${estudante.nome} foi aprovado`;
        } else if (
            estudante.quantidadeFaltas === this.faltasMaximas &&
            media > this.notaAprovacao * 1.1
        ) {    //Exercício 6 | Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.
            return `O estudante ${estudante.nome} foi aprovado com ressalvas`;
        } else {
            return `O estudante ${estudante.nome} foi reprovado`;
        }
    },

    //Exercício 7 | Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).

    listaAprovados: function() {
        let todos = [];

        this.listaEstudantes.forEach(estudante => {
            todos.push(this.aprovacao(estudante));
        });

        return todos;
    }
}

curso.adicionarAluno('Wendel', 2, [7, 5, 7]);

const aprovados = curso.listaAprovados();

aprovados.forEach(aprovado => {
    console.log(aprovado);
});
