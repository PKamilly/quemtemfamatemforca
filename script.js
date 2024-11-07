let angle = 0;

function animate() {
    angle += 0.02; // Ajuste a velocidade da órbita
    const moon = document.getElementById("moon");

    // Raio da órbita da lua ao redor do planeta
    const orbitRadius = 120;

    // Centro do planeta
    const centerX = 150; // Centralizado dentro do container
    const centerY = 150;

    // Calcula a posição da lua em uma órbita circular ao redor do planeta
    const x = centerX + orbitRadius * Math.cos(angle) - 15; // 15 para centralizar a lua
    const y = centerY + orbitRadius * Math.sin(angle) - 15; // 15 para centralizar a lua

    moon.style.left = `${x}px`;
    moon.style.top = `${y}px`;

    requestAnimationFrame(animate);
}

animate();
