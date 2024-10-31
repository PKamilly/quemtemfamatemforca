const moon = document.getElementById('moon');
const moonPeriod = 2; // Período da lua em segundos
const moonSpeed = 10; // Velocidade da lua em m/s
const moonRadius = 200; // Raio da órbita em pixels

// Atualiza os valores na tela
document.getElementById('moon-period').textContent = moonPeriod;
document.getElementById('moon-speed').textContent = moonSpeed;
document.getElementById('moon-radius').textContent = moonRadius;

let angle = 0;

// Função de animação
function animate() {
    angle += (360 / (moonPeriod * 100)); // 360 graus dividido pelo número de frames
    const radians = angle * (Math.PI / 180);
    const x = moonRadius * Math.cos(radians);
    const y = moonRadius * Math.sin(radians);
    moon.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    requestAnimationFrame(animate);
}

// Inicia a animação
animate();
