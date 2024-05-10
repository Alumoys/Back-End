const produto = {
    Nome: "Sapatenis",
    Preco: 20,
    Quantidade: "45"
}
console.log("Nome;", produto.Nome);
console.log("Preco;", produto.Preco);
console.log("Quantidade;", produto.Quantidade);

produto.descrever = function(){
    return ` O ${this.Nome}, custa R$ ${this.Preco},00 o estoque têm ${this.Quantidade}.`
}
 
produto.Preco = 26;
produto.Nome = "Sapatenis";
produto.Quantidade = "100";


console.log(produto.descrever());