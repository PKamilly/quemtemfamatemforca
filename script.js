// Constantes de física
const G = 6.67430e-11; // Constante gravitacional (m^3 kg^-1 s^-2)
const mPlaneta = 5.972e24; // Massa do planeta (kg)
const mLua = 7.34767309e22; // Massa da Lua (kg)
const distancia = 384400000; // Distância média entre o planeta e a Lua (m)

// Função para calcular a velocidade orbital
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

// Atualizar os valores na tela
document.getElementById('velocidade').textContent = velocidade.toFixed(2);
document.getElementById('aceleracao').textContent = aceleracao.toFixed(2);
document.getElementById('forca').textContent = forca.toExponential(2);

// Animação da Lua orbitando
const lua = document.querySelector('.lua');

// Calcular a duração da animação (tempo para a Lua completar uma órbita)
const duracaoOrbita = (2 * Math.PI * distancia) / velocidade / 1000; // Convertendo para segundos

// Ajustar a duração da animação da Lua com base na velocidade orbital
lua.style.animationDuration = `${duracaoOrbita.toFixed(2)}s`; // Aplica o tempo calculado à animação
