let idade = 14 // variavel com a idade.
if (idade < 16) { // se a idade for menor que 16 é executado o console com a msg Não vota
    console.log('Não vota.')
} else if (idade < 18 || idade > 65) {  // se a idade for entre 16,18 e acima de 65 o voto é opcional e é executado o console.log
    console.log('Voto opcional')
} else { // se não, o voto é obrigatorio.
    console.log('Voto obrigatorio')
}