const pessoa = {
    nome:"Carlos",
    idade: 47,
    profissao: "Medico"
}

function exibirInfo(){
    console.log(`nome: ${pessoa.nome}`)
    console.log(`idade: ${pessoa.idade}`)
    console.log(`profissao: ${pessoa.profissao}`)
}
exibirInfo();
//3.Funçaõ para atualizar a idade da pessao
function atualizaInfo(pessoa, novaProfissao){
        pessoa.profissao = novaProfissao;
}
console.log("Informações da pessoa");
exibirInfo(pessoa);

atualizaInfo(pessoa, "Engenheiro");

console.log("\ninformações dapessoa após atualizar");
exibirInfo(pessoa);

