let angle = 0;

function animate() {
    angle += 0.05; // Ajuste a velocidade da rotação
    const homer = document.getElementById("homer");
    
    // Calcule a nova posição de Homer para simular a órbita
    const x = 50 * Math.cos(angle) + 75; // Ajuste o valor para centralizar na rosquinha
    const y = 50 * Math.sin(angle) + 75;
    
    homer.style.left = `${x}px`;
    homer.style.top = `${y}px`;
    
    // Faça o Homer "olhar" para o centro da rosquinha
    const rotationAngle = angle * (180 / Math.PI); // Converte para graus
    homer.style.transform = `rotate(${rotationAngle + 90}deg)`;
    
    requestAnimationFrame(animate);
}

animate();
