const pessoa = {
    Nome: "João",
    Idade: 20,
    Profissao: "Analista"
}
console.log("Nome;", pessoa.Nome);
console.log("Idade;", pessoa.Idade);
console.log("Profissão;", pessoa.Prosfissao);

pessoa.descrever = function(){
    return `Meu nome é ${this.Nome}, tenho ${this.Idade} anos e minha profissão é ${this.Profissao}.`
}
 
pessoa.Idade = 26;
pessoa.Nome = "Zé";
pessoa.Profissao = "Garoto de Progama";


console.log(pessoa.descrever());
