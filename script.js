/* Resetando margens e padding */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Corpo da página */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000;
    overflow: hidden;
    margin: 0;
}

/* O planeta (com imagem de fundo) */
.planeta {
    width: 150px;
    height: 150px;
    background-image: url('imagens/planeta.jpg'); /* Imagem do planeta */
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
    position: absolute;
}

/* A órbita da lua (aqui apenas um círculo invisível) */
.orbita {
    width: 500px;
    height: 500px;
    border: 2px solid rgba(255, 255, 255, 0.3); /* Representação da órbita */
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* A lua (com imagem de fundo) */
.lua {
    width: 40px;
    height: 40px;
    background-image: url('imagens/lua.jpg'); /* Imagem da lua */
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform-origin: -250px; /* A lua vai girar em torno da borda da órbita */
}

/* Animação da órbita da lua */
@keyframes orbitar {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/* A animação de órbita é aplicada à lua */
.lua.orbitando {
    animation: orbitar 10s linear infinite;
}
