function carregar() {

    let msg = window.document.getElementById("msg") // Salva o elemento da DIV com id = msg na variavel msg
    let img = window.document.getElementById("imagem") // salva o elemento com o id= imagem dentro da variavel img
    let data = new Date() // Pega a data e hora e coloca na variavel data 
    let hora = data.getHours() // pega somente a hora exata e coloca na variavel hora
    msg.innerHTML = `Agora são ${hora} horas` // troca a msg da div com id = msg.
    if (hora >= 0 && hora < 12) { // Se a hora for maior ou igual que 0, vai executar...
        //Bom dia
        img.src = 'FotoManha.png' // Troca a imagem da div com id = imagem
        document.body.style.background = '#e2cd9f' // Troca a cor de fundo.
        

    } else if (hora >= 12 && hora < 18) {  // Se a hora for maior ou igual a 12 e menor que 18, vai executar...
        //Boa tarde
        img.src= 'FotoTarde.png' // troca a imagem da div com id = imagem
        document.body.style.background = '#b9d7ef' // troca a cor de fundo
    } else {   // se for diferente.
        //Boa noite
        img.src= 'FotoNoite.png' // troca imagem da div com id = imagem.
        document.body.style.background = '#886b9d' // troca a cor de fundo.
    }
    
}
