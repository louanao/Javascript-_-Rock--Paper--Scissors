/* --- VARIABLES --- */
  const choices = ['✊', '🤚', '✌️'];

  const player1 = document.getElementById('player-1');
  const player1scorehtml = document.getElementById('player1score')
  let player1score = 0;


  /* 1a. */
  const player2 = document.getElementById('player-2');
  const player2scorehtml = document.getElementById('player2score')
  let player2score = 0;

  /* 1b. */
  const resultArea = document.getElementById('result-area');

  /* 1c. */
const playBtn = document.getElementById('play-btn');
const playPapel = document.getElementById('papel');
const playPedra = document.getElementById('pedra');
const playTesoura = document.getElementById('tesoura');

// Variable ongoing = true

  /* This will help check your results */
  console.log(player2, resultArea, playBtn);
  console.log(playPapel, playPedra, playTesoura);
/* ----------------------------------------------- */

/* --- FUNCTIONS --- */

  const generateChoice = () => {
    let r = Math.floor(Math.random() * 3);
    return choices[r]
  };

  const insertHTML = (choice1, choice2, result) => {
    player1.innerHTML = choice1;
    player2.innerHTML = choice2;
    resultArea.innerHTML = result;
  };

  const decideWinner = (a, b) => {
    if ((a === '✊' && b === '✊') || (a === '🤚' && b === '🤚') || (a === '✌️' && b === '✌️')) {

      /* 3a. */ return "Egalité";

    } else if ((a === '✊' && b === '✌️') || (a === '🤚' && b === '✊') || (a === '✌️' && b === '🤚')) {
player1score = player1score + 1;

      /* 3b. */ return "Player 1 gagne!!!";

    } else {
player2score = player2score += 1;
      /* 3c. */ return "Player 2 gagne!!!";

    }
  };

  const play = (playerChoice) => {
    
    let choice1 = playerChoice;
    let choice2 = generateChoice();
    console.log("choice1", choice1)
    console.log("choice2", choice2)

    let result = decideWinner(choice1, choice2);
    console.log("result", result)

    console.log("player1score", player1score)
    console.log("player2score", player2score)
    console.log("player1scorehtml", player1scorehtml)
    console.log("player2scorehtml", player2scorehtml)

    player1scorehtml.innerHTML = player1score
    player2scorehtml.innerHTML = player2score

    // Vérifier que les scores des 2 joueurs sont < 3
    // Si < 3, on continue

    // Si = 3, le joueur gagne la partie
    // result = joueur X a gagné
    // On enlève les boutons sauf restart
    // On affiche le score en gros

    insertHTML(choice1, choice2, result);
    console.log(player1score)
    console.log(player2score)
  };
  
  function restart() {
  // const restart = () =>//
   player1score = 0;
   player2score = 0;
   insertHTML('-','-',"c'est parti mon kiki");
   player1scorehtml.innerHTML = 0
   player2scorehtml.innerHTML = 0
  }
/* ----------------------------------------------- */

/* --- EVENT LISTENERS --- */

  /* 2. */
playBtn.addEventListener('click', function() {
//  play(generateChoice())
    restart()
});

playPapel.addEventListener('click', function() {
  play('🤚')
});

playPedra.addEventListener('click', function() {
  play('✊')

});

playTesoura.addEventListener('click', function() {
    play('✌️')
  });

/* ------------------------------- */
