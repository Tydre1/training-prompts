function firstQ() {
    let pergunta1 = prompt("Você conseguiu? Sim ou Não");
    
    if (pergunta1 === "Sim") {
    alert("Parabéns para você!");
    } else if ("Não") {
    alert("Tenta mais um pouco 😉");
    } else {
    alert("Resposta não reconhecida!");
    return firstQ();
    }
    }
    
    console.log(firstQ());

    function secondQ() {
        let pergunta2 = prompt("Você está gostando de aprender sobre Cloud? Sim ou Não");
        
        if (pergunta2 === "Sim") {
        alert("Que bom! Continue assim, assistindo a Live hoje às 20h sobre Cloud");
        } else if ("Não") {
        alert("Tudo bem, continue com o 7 Days of Code");
        } else {
        alert("Resposta não reconhecida!");
        return secondQ();
        }
        }
        
        console.log(secondQ());

        let surpresa = prompt("Tenho uma surpresa para você. Escolha um número de 1 a 10.");

while (surpresa <= 4) {
alert("Parabéns, você ganhou " + <a href="">este</a> + "vídeo de presente.");

if (surpresa >= 5 && surpresa <= 10 ) {
alert("Parabéns, você ganhou " + <a href="">este</a> + "vídeo de presente.");
}

break;
}