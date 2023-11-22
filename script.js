const quotes = [
  "Escolha as suas batalhas e não desista até vencê-las.☘️💗",

  "Os desafios são o tempero da vida! 💫❤️",
  
  "Acredite em si mesma, e já terá percorrido metade do caminho.🥰🌻",
  
  "A vida é uma jornada, e não um destino. ☘️💗",
  
  "Empodere-se, pois o mundo precisa da sua voz.🥰🌻",
  
  "Sonhe, acredite, dedique-se e realize!.☘️💗",
  
  "É sem medo de errar que conseguimos os melhores acertos.🥰🌻",
  
  "Deus nãome colocou no mundo para ser coadjuvante da minha própria vida. 💫❤️",
  
  "Trabalhe para expressar o melhor de você, não para impressionar o outro.☘️💗",
  
  "A vida é muito curta, por isso, faça valer a pena. 🥰🌻",
  
  "O fracasso é apenas uma oportunidade de começar de novo.☘️💗",
  
  "Para construir o futuro, mantenha o foco no presente.🥰🌻",
  
  "Sou a autora da minha própria história, e cada dia é uma página em branco.☘️💗",
  
  "A verdadeira mudança começa de dentro para fora. 🥰🌻",
    
  ];
  
  const generateBtn = document.getElementById('generate-btn');
  const quoteDisplay = document.getElementById('quote');
  
  generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
  });
