let lsNumerosSorteados = [];
let numDef = 10, numUm = 1, numSecreto = gerarNumAleatorio(), numChute, numTentativas = 1, palavraTentativa;

exibirMensagemInicial();
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // Todo: Precisa ser melhorado, ainda não está funcional.
    // responsiveVoice.speak(texto, 'Brazilian Portuguese Female');
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre ${numUm} e ${numDef}`);
}

function verificarChute() {
    numChute = parseInt(document.querySelector('input').value);

    if (numChute === numSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        palavraTentativa = numTentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('p', `Parabéns! Você descobriu o número secreto ${numSecreto} com ${numTentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numChute > numSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor que o número informado ${numChute}. Tente novamente!`);
        } else {
            exibirTextoNaTela('p', `O número secreto é maior que o número informado ${numChute}. Tente novamente!`);
        }
        numTentativas++;
        limparCampo();
    }
}

function gerarNumAleatorio() {
    let numEscolhido;
    numEscolhido = Math.floor(Math.random() * numDef) + numUm;
    let qtdNumeroEscolhidosLista = lsNumerosSorteados.length;

    if (qtdNumeroEscolhidosLista === numDef){
        lsNumerosSorteados = [];
    }

    if(lsNumerosSorteados.includes(numEscolhido)) {
        return gerarNumAleatorio();
    }else{
        lsNumerosSorteados.push(numEscolhido);
        console.log(lsNumerosSorteados);
        return numEscolhido;
    }

}

function limparCampo() {
    numChute = document.querySelector('input');
    numChute.value = '';
}



function reiniciarJogo() {
    numSecreto = gerarNumAleatorio();
    limparCampo();
    numTentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}