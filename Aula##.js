class ContaBancaria{
    constructor(saldoInicial){
        let _saldo = saldoInicial; //variávle privada

        this.getSaldo = function(){
            return _saldo;
        };
        this.depositar = function(valor){
            if (valor > 0){
                _saldo += valor;
                console.log(`Depósito de R$${valor} realizado com sucesso.`);
            } else {
                console.log("Valor de depósito inválido.")
            }
        };
        this.sacar = function(valor){
            if ( valor > 0 && valor <= _saldo){
                _saldo -= valor;
                console.log(`Saque de R$${valor} realizado com sucesso.`);
            } else {
                console.log("Valor de saque inválido ou slado insuficiente.")
            }
        };
    }
}
// Criando um instância da classe ContaBancaria
let conta = new ContaBancaria(1800);

//Acessando e manipulando 
console.log(conta.getSaldo()); //1800
conta.depositar(500);
console.log(conta.getSaldo())//2300
conta.sacar(200);
console.log(conta.getSaldo());//2100
conta.sacar(3000);//Valor de saque inválido ou saldo insuficiente
console.log(conta.getSaldo()); // 2100