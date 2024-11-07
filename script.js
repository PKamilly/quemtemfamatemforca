// Constantes de física (valores escalados)
const G = 6.67430e-11; // Constante gravitacional (m^3 kg^-1 s^-2)
const mPlaneta = 1.5e24; // Massa do planeta (kg) - Escalada
const mLua = 2.5e22; // Massa da Lua (kg) - Escalada
const distanciaReal = 20px; // Distância real entre o planeta e a Lua (m)

// **Escalar a distância para um valor visualmente adequado**
const escalaDistancia = 500; // Distância visual (em px)
const distancia = distanciaReal / 1000000; // Reduzir a distância para um valor mais razoável na animação

// Função para calcular a velocidade orbital (em m/s)
function calcularVelocidadeOrbital(r) {
    return Math.sqrt(G * mPlaneta / r);
}

// Função para calcular a aceleração centrípeta
function calcularAceleracao(v, r) {
    return v * v / r;
}

// Função para calcular a força gravitacional
function calcularForcaGravitacional(m1, m2, r) {
    return (G * m1 * m2) / (r * r);
}

// Calcular a velocidade orbital, aceleração e força
const velocidade = calcularVelocidadeOrbital(distancia); // em m/s
const aceleracao = calcularAceleracao(velocidade, distancia); // em m/s²
const forca = calcularForcaGravitacional(mPlaneta, mLua, distancia); // em Newtons

// Atualizar os valores na tela (para fins informativos)
document.getElementById('velocidade').textContent = velocidade.toFixed(2);
document.getElementById('aceleracao').textContent = aceleracao.toFixed(2);
document.getElementById('forca').textContent = forca.toExponential(2);

// Animação da Lua orbitando
const lua = document.querySelector('.lua');

// Calcular a duração da animação (tempo para a Lua completar uma órbita)
const duracaoOrbita = (2 * Math.PI * distancia) / velocidade / 1000; // Convertendo para segundos

// **Escalar a duração da animação para um tempo muito rápido**
const duracaoEscalada = duracaoOrbita / 10000; // Reduzindo o tempo de órbita drasticamente para um movimento mais rápido

// Ajustar a duração da animação da Lua com base na velocidade orbital
lua.style.animationDuration = `${duracaoEscalada.toFixed(2)}s`; // Aplica o tempo calculado à animação
