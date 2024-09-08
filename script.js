const listItems = document.querySelectorAll('.list-item');
        const highlight = document.querySelector('.highlight');
        let activeItem = null;

        function updateHighlight(item, isActive = false) {
            const rect = item.getBoundingClientRect();
            const containerRect = item.parentElement.getBoundingClientRect();

            highlight.style.width = `${rect.width}px`;
            highlight.style.left = `${rect.left - containerRect.left}px`;
            highlight.style.opacity = isActive ? '0' : '1';
        }

        function handleItemClick(e) {
            const clickedItem = e.target;
            
            if (activeItem === clickedItem) {
                // If clicking the active item, deactivate it
                activeItem.classList.remove('active');
                activeItem = null;
                highlight.style.opacity = '0';
            } else {
                // Deactivate the previous active item if exists
                if (activeItem) {
                    activeItem.classList.remove('active');
                }
                
                // Activate the clicked item
                clickedItem.classList.add('active');
                activeItem = clickedItem;
                updateHighlight(clickedItem, true);
            }
        }

        function handleItemHover(e) {
            if (e.target !== activeItem) {
                updateHighlight(e.target, false);
            }
        }

        function handleItemLeave() {
            if (activeItem) {
                updateHighlight(activeItem, true);
            } else {
                highlight.style.opacity = '0';
            }
        }

        listItems.forEach(item => {
            item.addEventListener('click', handleItemClick);
            item.addEventListener('mouseenter', handleItemHover);
        });

        document.querySelector('.list-container').addEventListener('mouseleave', handleItemLeave);


// Datos para el Juego de Preguntas
const questions = [
    { question: "¿Dónde nos hicimos noviecitas?", answers: ["Restaurante", "Parque", "Cine"], correct: 0 },
    { question: "¿Cuál es nuestro viaje favorito?", answers: ["Playa", "Montaña","Selva"], correct: 2 },
    { question:"¿Dónde nos dijimos te amo? ", answers:["Bar","Tienda", "Cine"], correct:2},
    { question:"¿Cual fue nuestra primer peli?", answers:["Batman","orgullo y prejuicio", "SpiderMan"], correct:2},
    {question:"¿Cuál es el restaurante donde mas  nos hemos reido?", answers:["Restrepo", "Asiatico", "Griego"], correct:2},
    {question:"¿que poder escogería", answers:["Volar", "Teletransportarme", "Invisibilidad"], correct:1},
  ];
  
  let currentQuestion = 0;
  let answeredQuestions = new Set();
  let score = 0;
  
  function loadQuestion() {
      const questionElement = document.getElementById('question');
      const answersDiv = document.getElementById('answers');
      const scoreElement = document.getElementById('score');
  
      if (currentQuestion === questions.length) {
          questionElement.textContent = "¡Felicidades! Has terminado el juego. Tu puntuación final es: " + score;
          answersDiv.innerHTML = '';
          return;
      }
  
      const q = questions[currentQuestion];
      questionElement.textContent = q.question;
      answersDiv.innerHTML = '';
      
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = ('buttons-container');
  
      q.answers.forEach((answer, index) => {
          const button = document.createElement('button');
          button.textContent = answer;
          button.className = ('quiz-button');
          button.onclick = () => checkAnswer(index);
          /*nswersDiv.appendChild(button);*/
          buttonsContainer.appendChild(button);
      });
      answersDiv.appendChild(buttonsContainer);
      scoreElement.textContent = "Puntuación: " + score;
  }
  
  function checkAnswer(selected) {
      const q = questions[currentQuestion];
  
      if (answeredQuestions.has(currentQuestion)) {
          return;
      }
  
      answeredQuestions.add(currentQuestion);
  
      const resultMessage = document.getElementById('result-message');
      if (selected === q.correct) {
          score++;
          resultMessage.textContent = "¡Correcto!";
          resultMessage.classList.add('correct');
      } else {
          resultMessage.textContent = "Incorrecto.";
          resultMessage.classList.add('incorrect');
      }
  
      setTimeout(() => {
          resultMessage.textContent = '';
          resultMessage.classList.remove('correct', 'incorrect');
          currentQuestion++;
          loadQuestion();
      }, 2000);
  }
  
  // Llamada inicial para cargar la primera pregunta
  loadQuestion();
  
  // Galería de Fotos Interactiva
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.src;
      const fullScreenImage = document.createElement('div');
      fullScreenImage.innerHTML = `<img src="${src}" style="width: 100%; height: auto;">`;
      fullScreenImage.style.position = 'fixed';
      fullScreenImage.style.top = '0';
      fullScreenImage.style.left = '0';
      fullScreenImage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      fullScreenImage.style.padding = '20px';
      fullScreenImage.style.zIndex = '1000';
      fullScreenImage.onclick = () => document.body.removeChild(fullScreenImage);
      document.body.appendChild(fullScreenImage);
    });
  });
  
  /* // Calendario de Eventos
  const events = [
    { date: '2024-08-15', description: 'Aniversario de un año' },
    { date: '2024-12-25', description: 'Navidad' },
    // Más eventos
  ];
  
  function loadEvents() {
    const eventsDiv = document.getElementById('events');
    eventsDiv.innerHTML = '';
    events.forEach(event => {
      const eventDiv = document.createElement('div');
      eventDiv.className = 'event';
      eventDiv.innerText = `${event.date}: ${event.description}`;
      eventsDiv.appendChild(eventDiv);
    });
  }
  
  loadEvents();*/
  
  // Blog Personalizado
  
  const posts = [
    { 
      title: 'Nuestro primer viaje', 
      content: `
        <p>Nuestro primer viaje a Villa de Leyva fue una experiencia mágica desde el principio. Partimos en moto desde el norte de Bogotá, emocionadas por la aventura que nos esperaba. La carretera nos regaló paisajes impresionantes, y cada rincón parecía más hermoso que el anterior.</p>
        <p>Hicimos una parada en un encantador restaurante al borde de la carretera para almorzar. Mientras disfrutábamos de una cerveza bien fría, pedimos carne que, aunque no estaba a la altura de nuestras expectativas, nos hizo reír y disfrutar del momento. Nos tomamos algunas fotos para recordar esta primera parte del viaje y seguimos adelante, aún más emocionadas con cada kilómetro que avanzábamos.</p>
        <p>El clima estaba perfecto, y eso hizo que el viaje fuera aún más placentero. Paramos en el embalse del Sisga, un lugar de belleza impresionante, y nos capturamos en fotos hermosas que conservaremos con cariño. Más adelante, hicimos una breve parada en el Puente de Boyacá, donde nos tomamos un café caliente que nos reconfortó después de tantas horas en la moto. Aunque ya me dolían un poco las nalgas, la calidez del café y la compañía de mi amor hicieron que todo valiera la pena.</p>
        <p>Finalmente, llegamos a Villa de Leyva y el hotel era un sueño hecho realidad. Después de instalarnos, mi noviecita me llevó a conocer algunos de los lugares más maravillosos de la región. El Valle de los Dinosaurios fue simplemente fascinante, y me encantó explorar el museo de paleontología. Incluso tuvimos una pequeña aventura al caminar por áreas no permitidas, lo que añadió un toque de emoción a nuestro día.</p>
        <p>Disfrutamos de una deliciosa comida local y recorrimos el pueblo a pie, admirando su encanto. Cada momento estuvo lleno de amor y alegría, y me sentí completamente feliz. Aunque hubo un pequeño incidente divertido donde tu noviecita te "funo" jejeje lo siento novia, te amo mucho, la risa y el cariño lo compensaron todo.</p>
        <p>Este viaje no solo fue una aventura increíble, sino también una celebración de nuestro amor. Te amo muchísimo y cada instante vivido en este viaje quedará guardado en mi corazón.</p>
      `
    } ,
    {
        title: 'Nuestro viaje al Amazonas', 
        content: `
          <p>El viaje al Amazonas con mi noviecita fue, sin lugar a dudas, una de las experiencias más memorables y emocionantes que hemos vivido. Partimos de Bogotá con una mezcla de emoción y anticipación, madrugadoras y llenas de felicidad por la aventura que nos esperaba.</p>
          <p>Nuestro primer destino fue Leticia. Aunque al principio hubo un pequeño contratiempo con la compra de los asientos, el desayuno en Crepes & Waffles nos llenó de energía y nos preparó para lo que venía. Subimos al avión y, para mi sorpresa y alegría, me tocó un asiento junto a la ventana. El avión no estaba lleno, lo que permitió que mi noviecita se sentara a mi lado. ¡Un comienzo perfecto para nuestro viaje!</p>
          <p>Al llegar a Leticia, nos deslumbró la vista de la vegetación y la selva. Era impresionante ver por primera vez el inmenso río Amazonas y la densa selva que lo rodea. Sin perder tiempo, caminamos rápidamente para tomar la lancha que nos llevaría a nuestro hospedaje. Corrimos un poco para no perdernos el bote, pero la emoción nos hizo olvidar cualquier inconveniente.</p>
          <p>Navegar por el río Amazonas fue alucinante; su tamaño y majestuosidad nos dejaron sin palabras. El trayecto de aproximadamente 1:30 a 1:45 horas estuvo marcado por una ligera lluvia, que solo añadió un toque especial a la aventura.</p>
          <p>Al llegar al hospedaje, nos apresuramos a almorzar; ese día todo fue un poco apresurado, pero lleno de alegría. Después, nos embarcamos en una excursión de pesca en lancha, que resultó ser súper divertida. Intentamos pescar pirañas, y mientras yo no tuve suerte con las pirañas, pesqué dos cachamas. Mi noviecita logró pescar una piraña, pero decidió liberarla. Nuestros amigos de España, César y Elena, también participaron y Elena impresionó a todos con dos pirañas en su captura.</p>
          <p>La experiencia nocturna fue igualmente emocionante. Participamos en una caminata nocturna por la selva, que fue tanto aterradora como fascinante. Vimos una gran variedad de bichitos, desde arañas hasta una enorme culebra y la rana más grande que jamás hemos visto. La selva estaba llena de vida, y aunque un poco asustadizo, fue una experiencia increíble.</p>
          <p>Finalmente, regresamos al hospedaje para descansar, sabiendo que había mucho más por descubrir al día siguiente. Cada momento del viaje al Amazonas estuvo lleno de sorpresas, emoción y un toque de aventura que jamás olvidaremos.</p>
        `
    }
    
    // Puedes añadir más posts aquí 
  ];

 function loadPosts() {
    const blogDiv = document.getElementById('blog');
    blogDiv.innerHTML = ''; // Limpiar el contenido previo
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.className = 'post'; // Aplicar la clase CSS
      postDiv.innerHTML = `<h2>${post.title}</h2>${post.content}`;
      blogDiv.appendChild(postDiv);
    });
  }
  
  document.addEventListener('DOMContentLoaded', loadPosts); // Cargar posts cuando la página esté lista
  
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "❤️🌟 Hola amor, eres mi todo. ❤️🌟",
        "🌹✨ Cada día a tu lado es una bendición. 🌹✨",
        "💖💬 Te quiero más de lo que las palabras pueden expresar. 💖💬",
        "☀️🌧️ Eres mi sol en los días nublados. ☀️🌧️",
        "💑🎉 Contigo, cada momento es especial. 💑🎉",
        "😊💞 Eres la razón de mi sonrisa. 😊💞",
        "💎❤️ Tu amor es mi mayor tesoro. 💎❤️",
        "💭💕 Siempre estoy pensando en ti. 💭💕",
        "🌟💘 Eres el sueño hecho realidad. 🌟💘",
        "🌈💫 Nuestro amor es tan eterno como el ciclo del Avatar. 🌈💫",
        "🌬️🏔️💓 Como el viento acaricia las montañas, tu amor me envuelve. 🌬️🏔️💓",
        "🌍💖 En cada rincón del mundo, encuentro tu esencia. 🌍💖",
        "🧘‍♀️🌸 Así como Aang encuentra equilibrio, encuentro paz en ti. 🧘‍♀️🌸",
        "💎🌟 Tu amor es mi elemento más preciado. 💎🌟",
        "⛈️💨💖 Eres mi refugio en cada tormenta, como el aire al Avatar. ⛈️💨💖",
        "☀️💖 Como el sol ilumina el día, tu amor ilumina mi vida. ☀️💖",
        "🌊🔥💓 En la danza de los elementos, nuestros corazones laten como uno solo. 🌊🔥💓",
        "🔥❤️ Eres mi fuego interior, que enciende cada día. 🔥❤️",
        "🌈💞 Nuestros corazones están tan entrelazados como el destino de los cuatro elementos. 🌈💞",
        "🎁❤️ Tu amor es el regalo que nunca dejaré de agradecer. 🎁❤️",
        "⏳💖 Cada momento contigo es un tesoro eterno. ⏳💖",
        "🌩️🌞💓 Eres mi calma en el caos y mi sol en la tormenta. 🌩️🌞💓",
        "🌺❤️ Mi vida es más hermosa porque tú estás en ella. 🌺❤️",
        "❤️ Eres la luz que ilumina mi vida. ❤️",
        "😘 Cada momento a tu lado es un regalo. 😘",
        "🌹 Mi amor por ti crece más cada día. 🌹",
        "💖 No hay nada en el mundo que desee más que estar contigo. 💖",
        "🌟 Eres mi sueño hecho realidad. 🌟",
        "😍 Tu sonrisa es mi lugar feliz. 😍",
        "💑 Contigo, cada día es una aventura maravillosa. 💑",
        "💫 Mi corazón late solo por ti. 💫",
        "💕 Eres mi todo, mi amor eterno. 💕",
        "🌺 No puedo imaginar mi vida sin ti. 🌺",
        "🦸‍♀️ Eres mi heroína y mi compañera en esta aventura increíble que es nuestra vida. 🦸‍♀️",
        "🍵 La paz interior comienza con una mente tranquila. Respira hondo y deja ir el estrés. 🍵",
        "🌸 En la calma encuentras claridad. Dedica un momento a escuchar el susurro de tu corazón. 🌸",
        "🧘‍♂️ Como el té se infunde en agua, deja que la serenidad se funda en tu ser. 🧘‍♂️",
        "🍂 La paciencia es el camino hacia la paz. No apresures el proceso de meditación. 🍂",
        "🌟 Permítete ser como una hoja en el viento, fluyendo sin esfuerzo y encontrando equilibrio. 🌟",
        "🍵 La verdadera fuerza proviene de la tranquilidad interior. Enfócate en tu respiración y encuentra tu centro. 🍵",
        "🌀 La mente es como un jardín. Siembra pensamientos de calma y cosecharás paz. 🌀",
        "🌿 En la quietud, los grandes secretos de la vida se revelan. Escucha el silencio y aprende de él. 🌿",
        "🍂 Cada respiración es una oportunidad para renacer. Abraza el momento presente con gratitud. 🍂",
        "🌼 La meditación es el arte de descubrir la calma dentro del caos. Encuentra tu lugar de serenidad en el presente. 🌼",
                
    ];

    const messageBox = document.getElementById('message-box');
    const button = document.getElementById('generate-message');

    button.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        messageBox.textContent = messages[randomIndex];
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 0.7, y: 0.5 }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
  // Fecha del compromiso
  const fechaCompromiso = new Date('2023-09-08T00:00:00');

  function actualizarContador() {
      // Fecha actual
      const ahora = new Date();

      // Calcular la diferencia en milisegundos
      const diferencia = ahora - fechaCompromiso;

      // Convertir la diferencia a días, horas, minutos y segundos
      const segundos = Math.floor(diferencia / 1000);
      const minutos = Math.floor(segundos / 60);
      const horas = Math.floor(minutos / 60);
      const dias = Math.floor(horas / 24);

      // Actualizar los valores
      document.getElementById('Days').textContent = dias;
      document.getElementById('Hours').textContent = horas % 24;
      document.getElementById('Min').textContent = minutos % 60;
      document.getElementById('Seg').textContent = segundos % 60;
  }

  // Actualizar el contador cada segundo (1000 ms)
  actualizarContador();
  setInterval(actualizarContador, 1000);
});