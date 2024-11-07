let angle = 0;

function animate() {
    angle += 0.02; // Ajuste a velocidade da órbita
    const homer = document.getElementById("homer");

    // Raio da órbita
    const orbitRadius = 80; // Distância do centro da rosquinha

    // Calcule as posições x e y de Homer para criar a órbita circular
    const centerX = 100; // Centro X da rosquinha
    const centerY = 100; // Centro Y da rosquinha

    const x = centerX + orbitRadius * Math.cos(angle) - 25; // 25 é para centralizar o Homer
    const y = centerY + orbitRadius * Math.sin(angle) - 25; // 25 é para centralizar o Homer

    homer.style.left = `${x}px`;
    homer.style.top = `${y}px`;

    requestAnimationFrame(animate);
}

animate();
