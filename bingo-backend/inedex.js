const express = require('express');
const app = express();
const port = 3000;

let sortedNumbers = [];
let bingoCards = [];

app.get('/draw-number', (req, res) => {
  if (sortedNumbers.length >= 75) return res.status(400).send('Todos os números já foram sorteados');
  
  let number;
  do {
    number = Math.floor(Math.random() * 75) + 1;
  } while (sortedNumbers.includes(number));
  
  sortedNumbers.push(number);
  res.json({ number, sortedNumbers });
});

app.get('/reset-game', (req, res) => {
  sortedNumbers = [];
  bingoCards = [];
  res.send('Novo jogo iniciado');
});

app.get('/generate-card', (req, res) => {
  const card = generateBingoCard();
  bingoCards.push(card);
  res.json({ card });
});

app.get('/check-winner', (req, res) => {
  const winners = bingoCards.filter(card => checkIfCardWon(card));
  res.json({ winners });
});

function generateBingoCard() {
  const numbers = Array.from({ length: 75 }, (_, i) => i + 1);
  const card = [];
  for (let i = 0; i < 5; i++) {
    card.push(numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]);
  }
  return card;
}

function checkIfCardWon(card) {
  // Lógica para verificar se uma cartela ganhou
}

app.listen(port, () => console.log(`Servidor de bingo rodando em http://localhost:${port}`));
