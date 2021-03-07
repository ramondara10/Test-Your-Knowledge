//selectors
var startbtn = document.querySelector("#start-btn");
var timer = document.querySelector("#timer");
var questionBox = document.querySelector(".question-box");
var introOutro = document.querySelector("h1");
var container = document.querySelector(".container");
var scoreBoard = document.querySelector(".scoreboard");
var hightbtn = document.querySelector("#highbtn");
var score = document.querySelector("#score");
var highscore = document.querySelector("#highscore");
var question = document.querySelector(".question");

// set are variables//
//time variables

var timeLeft = 60;
var click = 0;
//user variables
var score;
var playerChoice;
var playeName;
var playerScore;

// answers
var correctAnswers = {
    answer1: questions[0].answer,
    answer2: questions[1].answer,
    answer3: questions[2].answer,
    answer4: questions[3].answer,
    answer5: questions[4].answer,
};
console.log(correctAnswers);
//new div for new elements
var newDiv = document.createElement("div");

// previous user storage
var previousPlayer = localStorage.getItem("playerName");
var previousScore = localStorage.getItem("playerScore");
renderPreviousPlayer();

function renderPreviousPlayer() {
    if (previousPlayer == null || previousScore === null) {
        return;
    } else {
        document.querySelector(
            "#highscore"
        ).textContent = `${previousPlayer}:${previousScore}`;
    }
}

//this should show the elements for the high score -------- this is not working for now
hightbtn.addEventListener("click", function (event) {
    event.stopPropagation();
    renderPreviousPlayer();
    if (highscore.getAttribute("style") === "display: block; none") {
        document
            .querySelector("#highscore")
            .setAttribute("style", "display: block");
    } else {
        document
            .querySelector("#highscore")
            .setAttribute("style", "display: block;");
    }
});
function startQuiz(event) {
    event.stopPropagation();

    container.appendChild(document.createElement("button")).id = "startjsbtn";
    container.appendChild(document.createElement("br"));
    document.querySelector("#startjsbtn").textContent = "Javascript Quiz";

    document
        .querySelector("#startjsbtn")
        .addEventListener("click", function (event) {
            event.stopPropagation();
            score = 0;
            // function ot make the time go backwards
            var interval = setInterval(function () {
                timeLeft--;
                timer.textContent = "Time left:" + timeLeft;
                if (timeLeft === 0) {
                    clearInterval(interval);
                    introOutro.textContent = "You Lose";
                    var btnId = ["#btn1", "#btn2", "#btn3", "#btn4"];
                    for (var i = 0; i < btnId.legnth; i++) {
                        container.removeChild(document.querySelector(introOutro[i]));
                    }
                    timer.textContent = "Time left: 0";
                    document.querySelector("#score").textContent =
                        "Here is your score:" + score;

                    container.appendChild(newDiv).id = "tryAgain";
                    document.querySelector("tryAgain").className = "choicebtn";
                    document.querySelector("tryAgain").textContent = "Try Again?";
                    document
                        .querySelector("tryAgain")
                        .addEventListener("click", function (event) {
                            event.stopPropagation();
                            location.reload;
                        });

                    gameEnd(function () {
                        playeName = prompt("Please type your initials to save your score");
                        playerScore = score;
                        localStorage.setItem("PlayerName", playerName);
                        localStorage.setItem("playerScore", PlayerScore);
                        renderPreviousPlayer();
                    }, 500);
                }
            }, 1000);

            //this will change the questions
            introOutro.textContent = questions[click].title;
            introOutro.id = introOutro;
            container.removeChild(document.querySelector("#startjsbtn"));

            //this will show the questions
            for (let i = 0; i < questions[click].choices.length; i++) {
                var newBtn = document.createElement("button");
                var btnID = ["btn1", "btn2", "btn3", "btn4"];
                newBtn.id = btnID[i];
                newBtn.className = "choicebtn";
                newBtn.textContent = questions[click].choices[i];
                container.appendChild(newBtn);
            }

            // title.appendChild(newDiv).id = "count";

            // add eventListners
            container.addEventListener("click", function (event) {
                event.stopPropagation();
                console.log(event);
                userchoice = event.target.textContent;
                if (event.target.matches(".choicebtn")) {
                    click++;
                    console.log(click);
                    var btnID = ["#btn1", "#btn2", "#btn3", "#btn4"];
                    if (click === 1) {
                        introOutro.textContent = questions[click].title;
                        for (var i = 0; i < questions[click].choices.length; i++) {
                            document.querySelector(
                                (btnID[i].textContent = questions[click].choices[i])
                            );
                        }
                    }
                    if (click === 2) {
                        introOutro.textContent = questions[click].title;
                        for (var i = 0; i < questions[click].choices.length; i++) {
                            document.querySelector(
                                (btnID[i].textContent = questions[click].choices[i])
                            );
                        }
                    }
                    if (click === 3) {
                        introOutro.textContent = questions[click].title;
                        for (var i = 0; i < questions[click].choices.length; i++) {
                            document.querySelector(
                                (btnID[i].textContent = questions[click].choices[i])
                            );
                        }
                    }
                    if (click === 4) {
                        introOutro.textContent = questions[click].title;
                        for (var i = 0; i < questions[click].choices.length; i++) {
                            document.querySelector(
                                (btnID[i].textContent = questions[click].choices[i])
                            );
                        }
                    }
                    if (click > 4) {
                        introOutro.textContent = "Finished";
                        for (var i = 0; i < btnID.legnth; i++) {
                            container.removeChild(document.querySelector(btnID[i]));
                        }
                        timer.textContent = "Time left: 0";
                        document.querySelector("#score").textContent =
                            "Your Score:" + score;
                        clearInterval(interval);
                        container.appendChild(document.createElement("button")).id =
                            "restart";
                        document.querySelector("#restart").className = "choices";
                        document.querySelector("#restart").textContent = "Try again?";
                        document
                            .querySelector("#restart")
                            .addEventListener("click", function (event) {
                                event.stopPropagation();
                                location.reload();
                            });
                        setTimesUp(function () {
                            playerName = prompt(
                                "Please type your initials to save your score"
                            );
                            playerScore = score;
                            localStorage.setItem("playername", playerName);
                            localStorage.setirem("playerscore", playerScore);
                            renderPreviousPlayer();
                        }, 500);
                    }

                    //confirm choices
                    if (
                        userchoice === correctAnswers.answer1 ||
                        userchoice === correctAnswers.answer2 ||
                        userchoice === correctAnswers.answer3 ||
                        userchoice === correctAnswers.answer4 ||
                        userchoice === correctAnswers.answer5
                    ) {
                        score = score + 20;
                        console.log("Correct! you chose the right anser", userchoice);
                        console.log("score:", score);
                        score.textContent = "Your Score:" + score;
                        return score;
                    }
                    else {
                        console.log("incorrect")
                        score = score - 10;
                        console.log("score:", score);
                        timeLeft = secondsLeft - 5;
                        console.log("Time Left:", timeLeft);
                        score.textContent = "Your score:" + score
                        return score;
                    }
                }
            });
            score.textContent = `Your Score:${score}`;
        });
}

startbtn.addEventListener("click", startQuiz);
