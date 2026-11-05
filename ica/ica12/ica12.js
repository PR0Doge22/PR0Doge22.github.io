const generateQuestionButton = document.getElementById("js-new-quote");
const revealAnswerButton = document.getElementById("js-tweet");
const apiEndPoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

const questionDiv = document.getElementById("js-quote-text");
const answerDiv = document.getElementById("js-answer-text");

const questionP = document.createElement("p");
questionDiv.appendChild(questionP);
const answerP = document.createElement("p");
answerDiv.appendChild(answerP);


let triviaQuestion = "";
let triviaAnswer = "";

function revealAnswer() {
    console.log(triviaAnswer)
    answerP.textContent = triviaAnswer;
}

async function getTriva() {
    //console.log("mouse click"
    const trivia = await fetch(apiEndPoint);
    if (trivia.ok) {
        const triviaData = await trivia.json();
        triviaQuestion = triviaData.question;
        triviaAnswer = triviaData.answer;

        questionP.textContent = triviaQuestion;
        answerP.textContent = "";
    }
    else
    {
        console.log("fetch request failure");
        alert("fetch request failure");
    }
}

generateQuestionButton.addEventListener("click", getTriva);
revealAnswerButton.addEventListener("click", revealAnswer);