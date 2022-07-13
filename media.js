//Crie uma função que recebe um array alunos que irá representar a média final.
//Percorra o array e popule um novo array auxiliar apenas com os alunos cuja notas são maiores ou i gual a média final.
//Utilize a técnica "object destructuning" para manipular as propriedades de cada aluno.

const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 9,
        turma: '2C',
    },
    {
        nome: 'Amaro',
        nota: 4,
        turma: '2C',
    },
];

function alunosAprovados(array, media){
    let aprovados = [];
    
    for(let i = 0; i < array.length; i++){
        const { nota, nome } = array[i]

        if (nota >= media){
            aprovados.push(nome);
        }

    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5))
