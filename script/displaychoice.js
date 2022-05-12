const humanchoiceimg = document.getElementById('humanchoiceimg')
const aichoiceimg = document.getElementById('aichoiceimg')
const displaychoicepicAI = () => {
    if (ai_choice === choices.rock_choice) {
        aichoiceimg.setAttribute("src", "media/rockpic.jpg")
        }
    else if (ai_choice === choices.paper_choice) {
        aichoiceimg.setAttribute("src", "media/paperballpic.jpg")
    }
    else if (ai_choice === choices.scissors_choice) {
        aichoiceimg.setAttribute("src", "media/scissorspic.jpg")
    }
    else {
        alert('ERROR: displaychoicepic()')
    }
}
const humandisplayrock = () => {
    humanchoiceimg.setAttribute("src", "media/rockpic.jpg")
}
const humandisplaypaper = () => {
    humanchoiceimg.setAttribute("src", "media/paperballpic.jpg")
}
const humandisplayscissors = () => {
    humanchoiceimg.setAttribute("src", "media/scissorspic.jpg")
}
