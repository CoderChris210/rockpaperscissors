const resulttext = document.getElementById('resulttext')
const rockbtn = document.getElementById('rockbtn')
const paperbtn = document.getElementById('paperbtn')
const scissorsbtn = document.getElementById('scissorsbtn')
const restartbtn = document.getElementById('restartbtn')
const switchinnerHTML = (modinnerhtmlval) => {
  resulttext.innerHTML = modinnerhtmlval
}
const choices = {
    rock_choice : {
      name: 'Rock',
      value: 0
    },
    scissors_choice: {
      name: 'Scissors',
      value: 1
    },
    paper_choice: {
      name: 'Paper',
      value: 2
    }
  }
  let ai_choice = Math.floor(Math.random() * 3)
  const decideaichoice = () => {
    if (ai_choice === choices.rock_choice.value) {
      ai_choice = choices.rock_choice
    }
    else if (ai_choice === choices.scissors_choice.value) {
      ai_choice = choices.scissors_choice
    }
    else if (ai_choice === choices.paper_choice.value) {
      ai_choice = choices.paper_choice
    }
    else {
      console.log('AI = NULL: FATAL ERROR IN decideaichoice()')
    }
  }
  const win_message = (winner) => {
    switchinnerHTML(`<h1>The winner is... \n${winner.toUpperCase()}!</h1>`)
  }
  decideaichoice()
  winner = null;
  const play = (pl1_choice, pl2_choice) => {
    if (pl1_choice === choices.rock_choice && pl2_choice === choices.scissors_choice) {
      winner = pl1_choice.name
      win_message(winner)
    }
    else if (pl1_choice === choices.rock_choice && pl2_choice === choices.paper_choice) {
      winner = pl2_choice.name
      win_message(winner)
    }
    else if(pl1_choice === choices.scissors_choice && pl2_choice === choices.paper_choice) {
      winner = pl1_choice.name
      win_message(winner)
    }
    else if(pl1_choice === choices.scissors_choice && pl2_choice === choices.rock_choice) {
      winner = pl2_choice.name
      win_message(winner)
    }
    else if(pl1_choice === choices.paper_choice && pl2_choice === choices.rock_choice) {
      winner = pl1_choice.name
      win_message(winner)
    }
    else if(pl1_choice === choices.paper_choice && pl2_choice === choices.scissors_choice) {
      winner = pl2_choice.name
      win_message(winner)
    }
    else if(pl1_choice === pl2_choice) {
      winner = 'No one'
      win_message(winner)
    }
  }
  const play_rock = () => {
    play(choices.rock_choice, ai_choice)
  }
  const play_scissors = () => {
    play(choices.scissors_choice, ai_choice)
  }
  const play_paper = () => {
    play(choices.paper_choice, ai_choice)
  }
  const restart = () => {
    switchinnerHTML('<p>waiting for you ;)</p>')
  }
  rockbtn.addEventListener('click', function() {play_rock();})
  paperbtn.addEventListener('click', function() {play_paper();})
  scissorsbtn.addEventListener('click', function() {play_scissors();})
  restartbtn.addEventListener('click', function() {restart();})
