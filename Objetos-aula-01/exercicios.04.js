const contaBancaria = {
    Titular: "Luiz Felipe",
    Saldo: 100,
    NumeroConta: "8-787.878.787"
}
console.log("Titular;", contaBancaria.Titular);
console.log("Saldo;", contaBancaria.Saldo);
console.log("NumeroConta;", contaBancaria.NumeroConta);

contaBancaria.descrever = function(){
    return ` O ${this.Titular}, possui o Saldo de R$ ${this.Saldo},00 número da conta ${this.NumeroConta}.`
}
 
contaBancaria.Saldo = 26;
contaBancaria.Titular = "Luiz Felipe";
contaBancaria.NumeroConta = "8-787.878.787";


console.log(contaBancaria.descrever());
////////////////////////////////////////////////////
var contaBancaria = { titular: "João Farizeu", Saldo: 18, contaBancaria: 11111-333 } 
contaBancaria.depositar = function(valor){ this.Saldo += valor; } 
contaBancaria.sacar = function(valor){ this.Saldo -= valor; } 
contaBancaria.depositar(1000); contaBancaria.sacar(500); 
contaBancaria.extrato = function(){ 
    return `Olá ${this.titular}, seu Saldo é de R$${this.Saldo} reais.` } 
    console.log(contaBancaria.extrato()) console.log(contaBancaria.Saldo)