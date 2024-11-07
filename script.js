let angle = 0;

function animate() {
    angle += 0.02; // Ajuste a velocidade da rotação
    const homer = document.getElementById("homer");

    // Calcule a nova posição de Homer em uma órbita circular
    const orbitRadius = 70; // Defina o raio da órbita
    const x = orbitRadius * Math.cos(angle) + 75; // Ajuste o valor para centralizar na rosquinha
    const y = orbitRadius * Math.sin(angle) + 75;

    homer.style.left = `${x}px`;
    homer.style.top = `${y}px`;

    // Rotaciona o Homer para olhar para o centro da rosquinha
    const rotationAngle = (angle * 180) / Math.PI + 90; // Converte para graus e ajusta o ângulo
    homer.style.transform = `rotate(${rotationAngle}deg)`;

    requestAnimationFrame(animate);
}

animate();
