
function firstQ() {
    let pergunta1 = prompt("Você conseguiu? Sim ou Não");

    if (pergunta1 === "Sim") {
    alert("Parabéns para você!");
    } else if (pergunta1 === "Não") {
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
        } else if (pergunta2 === "Não") {
    alert("Tudo bem, continue com o 7 Days of Code");
    } else {
    alert("Resposta não reconhecida!");
    return secondQ()
    }
}
        console.log(secondQ());

function thirdQ() {
    let escala = prompt("Em uma escala de 1 a 10, o quanto você está gostando desse cenário de Programação?");
    escala = parseInt(escala);

    while (escala <= 5) {
        document.write(`Tudo bem, assista vídeos no Youtube sobre pessoas que vivem a vida como` + "<br>" +
            `Software Engineers que você pode achar um life style bem interessante, vai que você` + "<br>" +
            `acaba tomando gosto pela programação` + "<br>" );
        escala++;
        break;
    }

    if (escala > 5) {
        document.write(`Que ótimo! Assista este vídeo na vida de um Software Engineer na empresa META: <a href="https://www.youtube.com/watch?v=-AIObeOaIMk" target="blank_">Day in the Life of a Facebook/Meta Software Engineer</a>`);
    }
    }

    console.log(thirdQ());