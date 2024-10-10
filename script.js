// script.js
const rosquinha = document.getElementById('bola');
let velocidadeY = 0; // Velocidade vertical
const gravidade = 0.5; // Aceleração da gravidade
const limiteInferior = 450; // Limite inferior da área de jogo

function atualizar() {
    velocidadeY += gravidade; // Aplica gravidade
    let novaPosicaoY = parseInt(bola.style.top) + velocidadeY;

    // Verifica se atingiu o limite inferior
    if (novaPosicaoY >= limiteInferior) {
        novaPosicaoY = limiteInferior;
        velocidadeY *= -0.7; // Inverte a direção e aplica um fator de amortecimento
    }

    bola.style.top = novaPosicaoY + 'px';

    requestAnimationFrame(atualizar); // Chama a função novamente
}

// Inicia a animação
atualizar();
