const word = "javascript"; // Palavra a ser adivinhada
let guessedLetters = []; // Letras que o jogador já adivinhou
let attemptsLeft = 6; // Tentativas restantes

// Função que é chamada ao clicar no botão
function guessLetter() {
    const guess = document.getElementById("guess").value.toLowerCase();
    const messageElement = document.getElementById("message");
    const attemptsElement = document.getElementById("attempts");
    
    // Verifica se a letra foi digitada corretamente
    if (guess && guess.length === 1 && !guessedLetters.includes(guess)) {
        guessedLetters.push(guess);
        
        // Se a letra estiver na palavra
        if (word.includes(guess)) {
            messageElement.innerText = "Boa! Letra correta.";
        } else {
            attemptsLeft--;
            messageElement.innerText = "Letra incorreta!";
        }

        // Atualiza o estado da palavra e as tentativas restantes
        updateWord();
        attemptsElement.innerText = `Tentativas restantes: ${attemptsLeft}`;

        // Verifica se o jogador perdeu ou ganhou
        if (attemptsLeft === 0) {
            messageElement.innerText = "Você perdeu! A palavra era: " + word;
        } else if (!document.getElementById("word").innerText.includes("_")) {
            messageElement.innerText = "Você ganhou! Parabéns!";
        }
    }

    // Limpa o campo de entrada
    document.getElementById("guess").value = "";
}

// Atualiza a palavra visível com base nas letras adivinhadas
function updateWord() {
    let displayWord = "";
    for (let letter of word) {
        displayWord += guessedLetters.includes(letter) ? letter + " " : "_ ";
    }
    document.getElementById("word").innerText = displayWord.trim();
}

// Inicializa o estado da palavra no início
updateWord();
