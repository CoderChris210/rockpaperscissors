//type play_rock(), player_paper(), play_scissors() for your options. PS: make to the type these things at the very end of the js file! or else the compiler will get very very mad >:(
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
      console.error('AI = NULL: FATAL ERROR IN decideaichoice()')
    }
  }
  const win_message = (winner) => {
    console.log(`The winner is... \n${winner.toUpperCase()}!`)
  }
  const player_choices = (pl1, pl2) => {
      console.log(`You choose: ${pl1.name}\nThe bot chooses: ${pl2.name}\n`)
  }
  const call_player_choices = (pl1_choice, pl2_choice) => {
      player_choices(pl1_choice, pl2_choice)
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
  }
  const play_rock = () => {
    play(choices.rock_choice, ai_choice)
    call_player_choices(choices.rock_choice, ai_choice)
  }
  const play_scissors = () => {
    play(choices.scissors_choice, ai_choice)
        call_player_choices(choices.scissors_choice, ai_choice)
  }
  const play_paper = () => {
    play(choices.paper_choice, ai_choice)
    call_player_choices(choices.paper_choice, ai_choice)
  }
  //change the thing below to what you want to play dont remove the 'play_' or the '()' or else no worky just change rock to what option you want or keep it as rock
  play_rock()
