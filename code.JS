// Descrição de palavras em inglês para português
const dictionary = {
  "the": "o/a",
  "be": "ser/estar",
  "to": "para",
  "of": "de",
  "and": "e",
  "a": "um/uma",
  "in": "em",
  "that": "isso/aquele",
  "have": "ter",
  "I": "eu",
  "it": "isso",
  "for": "para",
  "not": "não",
  "on": "em/sobre",
  "with": "com",
  "he": "ele",
  "as": "como",
  "you": "você",
  "do": "fazer",
  "at": "em",
  
  // Irei adicionar aqui mais palavras depois
};

// Função para traduzir o texto
function translateText() {
  const englishInput = document.getElementById('englishInput').value.toLowerCase();
  const words = englishInput.split(' ');

  let translatedText = '';

  words.forEach((word) => {
    if (dictionary[word]) {
      translatedText += dictionary[word] + ' ';
    } else {
      translatedText += word + ' ';
    }
  });

  document.getElementById('portugueseOutput').value = translatedText.trim();
}

// Botão de tradução
document.getElementById('translateButton').addEventListener('click', translateText);
