function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}:00</strong>
          <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
    </li>

  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games} 
          </ul>
        </div>
  `
}

document.querySelector("#app").innerHTML = `
<header>
        <img src="./assets/logo.svg" alt="Logo da NLW" />
      </header>
      <main id="cards">
        ${createCard("20/11", "domingo", 
        createGame('qatar', '16', 'ecuador'))}

        ${createCard("21/11", "segunda-feira", 
        createGame('england', '10', 'iran')+
        createGame('senegal', '13', 'netherlands')+
        createGame('usa', '16', 'wales'))}

        ${createCard("22/11", "terça-feira", 
        createGame('argentina', '07', 'arabia')+
        createGame('denmark', '10', 'tunisia')+
        createGame('mexico', '13', 'poland')+
        createGame('france', '16', 'australia'))}

        ${createCard("23/11", "quarta-feira", 
        createGame('morocco', '07', 'croatia')+
        createGame('germany', '10', 'japan')+
        createGame('spain', '13', 'costarica')+
        createGame('belgium', '16', 'canada'))}

        ${createCard("24/11", "quinta-feira", 
        createGame('switzerland', '07', 'cameroon')+
        createGame('uruguay', '10', 'southkorea')+
        createGame('portugal', '13', 'ghana')+
        createGame('brazil', '16', 'serbia'))}

        ${createCard("25/11", "sexta-feira", 
        createGame('wales', '07', 'iran')+
        createGame('qatar', '10', 'senegal')+
        createGame('netherlands', '13', 'ecuador')+
        createGame('england', '16', 'usa'))}

        ${createCard("26/11", "sábado", 
        createGame('tunisia', '07', 'australia')+
        createGame('poland', '10', 'arabia')+
        createGame('france', '13', 'denmark')+
        createGame('argentina', '16', 'mexico'))}

        ${createCard("27/11", "domingo", 
        createGame('japan','07', 'costarica')+
        createGame('belgium', '10', 'morocco')+
        createGame('croatia', '13', 'canada')+
        createGame('spain', '16', 'germany'))}

        ${createCard("28/11", "segunda-feira", 
        createGame('cameroon', '07', 'serbia')+
        createGame('southkorea', '10', 'ghana')+
        createGame('brazil', '13', 'switzerland')+
        createGame('portugal', '16', 'uruguay'))}

        ${createCard("29/11", "terça-feira", 
        createGame('ecuador', '12', 'senegal')+
        createGame('netherlands', '12', 'qatar')+
        createGame('iran', '16', 'usa')+
        createGame('wales', '16', 'england'))}

        ${createCard("30/11", "quarta-feira", 
        createGame('tunisia', '12', 'france')+
        createGame('australia', '12', 'denmark')+
        createGame('poland', '16', 'argentina')+
        createGame('arabia', '16', 'mexico'))}

        ${createCard("01/12", "quinta-feira", 
        createGame('croatia', '12', 'belgium')+
        createGame('canada', '12','morocco')+
        createGame('japan', '16', 'spain')+
        createGame('costarica', '16', 'germany'))}

        ${createCard("02/12", "sexta-feira", 
        createGame('southkorea', '12', 'portugal')+
        createGame('ghana', '12', 'uruguay')+
        createGame('serbia', '16', 'switzerland')+
        createGame('cameroon', '16', 'brazil'))}
      </main>
`