let agora = new Date()  // Salva a data e hora na variavel agora
let hora = agora.getHours() // pega a hora da variavel agora e transforma em numero inteiro, depois salva na variavel hora
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {  // se a hora for menor que 12, printar no console Bom dia
    console.log ('Bom dia')
} else if (hora >= 18) { // se a hora for maior ou igual a 18, printar no console boa noite
    console.log ('Boa noite')
} else { // se nao, printar boa noite.
    console.log ('Boa tarde')
}