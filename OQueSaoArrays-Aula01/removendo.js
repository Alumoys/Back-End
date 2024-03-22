const notas = [10 ,2 , 5.6, 7.4, 12]

notas.pop();

//console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

console.log(`A média é ${media}.`);