const aichoicetext = document.getElementById('aichoicetext')
const resulttext = document.getElementById('resulttext')
const humanchoicetext = document.getElementById('humanchoicetext')
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
    name_console: 'You',
    name_console_op: 'The bot',
    value: 0
  },
  scissors_choice: {
    name: 'Scissors',
    name_console: 'You',
    name_console_op: 'The bot',
    value: 1
  },
  paper_choice: {
    name: 'Paper',
    name_console: 'You',
    name_console_op: 'The bot',
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
      alert('FATAL ERROR IN decideaichoice()')
    }
  }
const rotateai_choice = () => {
  const rotatenumber = Math.floor(Math.random() * 3);
  ai_choice = rotatenumber;
}
  const win_message = (winner) => {
    switchinnerHTML(`<h1>The winner is... \n${winner.toUpperCase()}!</h1>`)
  }
  const player_choices = (pl1, pl2) => {
    humanchoicetext.innerHTML = `You chose: ${pl1.name}`
    aichoicetext.innerHTML = `The bot chose: ${pl2.name}`
}
  decideaichoice()
  winner = null;

  const play = (pl1_choice, pl2_choice) => {
    if (pl1_choice === choices.rock_choice && pl2_choice === choices.scissors_choice) {
      winner = pl1_choice.name_console
      win_message(winner)
    }
    else if (pl1_choice === choices.rock_choice && pl2_choice === choices.paper_choice) {
      winner = pl2_choice.name_console_op
      win_message(winner)
    }
    else if(pl1_choice === choices.scissors_choice && pl2_choice === choices.paper_choice) {
      winner = pl1_choice.name_console
      win_message(winner)
    }
    else if(pl1_choice === choices.scissors_choice && pl2_choice === choices.rock_choice) {
      winner = pl2_choice.name_console_op
      win_message(winner)
    }
    else if(pl1_choice === choices.paper_choice && pl2_choice === choices.rock_choice) {
      winner = pl1_choice.name_console
      win_message(winner)
    }
    else if(pl1_choice === choices.paper_choice && pl2_choice === choices.scissors_choice) {
      winner = pl2_choice.name_console_op
      win_message(winner)
    }
    else if(pl1_choice === pl2_choice) {
      winner = 'No one'
      win_message(winner)
    }
    else {
      alert('FATAL ERROR: play()')
    }
    console.log(pl1_choice)
  }
  const play_rock = () => {
    rotateai_choice()
    decideaichoice()
    player_choices(choices.rock_choice, ai_choice)
    play(choices.rock_choice, ai_choice)
    humandisplayrock()
    displaychoicepicAI()
    console.log(ai_choice)
  }
  const play_scissors = () => {
    rotateai_choice()
    decideaichoice()
    player_choices(choices.scissors_choice, ai_choice)
    play(choices.scissors_choice, ai_choice)
    humandisplayscissors()
    displaychoicepicAI()
    console.log(ai_choice)
  }
  const play_paper = () => {
    rotateai_choice()
    decideaichoice()
    player_choices(choices.paper_choice, ai_choice)
    play(choices.paper_choice, ai_choice)
    humandisplaypaper()
    displaychoicepicAI()
    console.log(ai_choice)
  }
  const restart = () => {
    switchinnerHTML('<p>waiting for you ;)</p>')
  }
rockbtn.addEventListener('click', function() {play_rock();})
paperbtn.addEventListener('click', function() {play_paper();})
scissorsbtn.addEventListener('click', function() {play_scissors();})
restartbtn.addEventListener('click', function() {restart();})
