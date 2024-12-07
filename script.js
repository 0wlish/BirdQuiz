//TODO:
//shuffle options for answers
//lightbox for images (click to zoom in on images)
//make score more obvious (in header?)
//prevent changing answer after submission
//put answer right after image??
//highlight answer in green?
//regional options
//nicer colors

const questions = []; //holds addresses of questions in json file
const answers = []; //hold values of answers (a String equal to one of the options) for each question
let region = "AL"; //holds region for birds, default is all

const NUM_EU = 24; //number of questions in each region
const NUM_NA = 47;

setRegion("al"); //set region to all birds (default)

function makeQuiz() {
    if (getCookie("q1") == "") { //if cookie has not been set
        let questionTranslate;

        if (region != "al") {
            questionTranslate = fetch("https://owlish.hackclub.app/BirdQuiz/server/" + region + ".json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();})
            .then((data) => {return data})
            .catch((error) => console.error("Unable to fetch data:", error)); //fetch is working
        }
        //need to somehow run for loop after fetch finishes
        for (let i = 0; i < 10; i++) { //populate questions with numbers 0..70, then generate list of images
            let num = 0;
            if (region == "na") {
                num = Math.floor(Math.random() * NUM_NA);
            }
            else if (region == "eu") {
                num = Math.floor(Math.random() * NUM_EU);
            }
            else {
                num = Math.floor(Math.random() * 71);
            }

            if (i == 0) {
                questions[0] = num;
            }
            else {
                while (questions.indexOf(num) != -1) { //do this while num already exists in question
                    if (region == "na") {
                        num = Math.floor(Math.random() * NUM_NA);
        
                    }
                    else if (region == "eu") {
                        num = Math.floor(Math.random() * NUM_EU);
                    }
                    else {
                        num = Math.floor(Math.random() * 71);
                    }
                }
                questions[i] = num;
            }
            if (region != "al") { //translate indexes into question indexes

            }
            setCookie("q" + (i + 1), num);
        }
    }
    else {
        for (let i = 0; i < 10; i++) {
            questions[i] = getCookie("q" + (i + 1));
        }
    }
    for (let i = 0; i < 10; i++) {
        fetch("https://owlish.hackclub.app/BirdQuiz/server/questions/" + questions[i] + ".json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();})
        .then((data) => {
            document.getElementById("i" + (i + 1)).src = "https://owlish.hackclub.app/BirdQuiz/server/images/" + data.url;
            document.getElementById("l" + (i + 1)).innerHTML = data.location;
            document.getElementById((i + 1) + "o1").innerHTML = data.o1;
            document.getElementById((i + 1) + "o2").innerHTML = data.o2;
            document.getElementById((i + 1) + "o3").innerHTML = data.o3;
            document.getElementById((i + 1) + "o4").innerHTML = data.o4;})
        .catch((error) => console.error("Unable to fetch data:", error));
    }
}
function getCookie(name) {
    let n = name + "=";
    const cArr = document.cookie.split(";");
    for (let i = 0; i < cArr.length; i++) {
        let c = cArr[i];
        if (c.indexOf(n) != -1) {
            return c.substring(n.length + c.indexOf(n), c.length);
        }
      }
    return "";
}
function setCookie(name, value) {
    document.cookie = name + "=" + value + ";max-age=86400;path=/BirdQuiz/;SameSite=None; Secure";
}
function deleteCookie(name) { //run when answers are submitted
    //console.log("before deletion: " + document.cookie);
    document.cookie = name+"=;max-age=-1;path=/BirdQuiz/;SameSite=None; Secure";
    //console.log("after deletion: " + document.cookie);
}
function newQuiz() {
    //console.log("generating new quiz");
    for (let i = 1; i <= 10; i++) {
        deleteCookie("q" + i);
        clearStyles(i);
    }
    clearAnswerNotes();
    makeQuiz();
}
function setAnswer(id) {
    //recieves id of currently selected answer
    let index = parseInt(id.substring(0,2)) - 1;
    let answer = document.getElementById(id).innerHTML;
    clearStyles(index + 1);
    document.getElementById(id).style.backgroundColor = "darkgrey";
    answers[index] = answer
}
function clearStyles (qNum) {
    document.getElementById(qNum + "o1").style.backgroundColor = "";
    document.getElementById(qNum + "o2").style.backgroundColor = "";
    document.getElementById(qNum + "o3").style.backgroundColor = "";
    document.getElementById(qNum + "o4").style.backgroundColor = "";
}
function clearAnswerNotes() { //clears all answer notes and results
    for (let i = 1; i <= 10; i++) {
        document.getElementById("res" + i).parentElement.style.display = "none"; //clear correct/incorrect
        document.getElementById("ans" + i).style.display = "none"; //clear answerbox
    }
    document.getElementById("score-container").style.display = "none";
}
function submitAnswers() {
    //checks if answers are correct
    let score = 0;

    for (let index in answers) {
        //somehow disable choosing a new answer

        fetch("https://owlish.hackclub.app/BirdQuiz/server/answers/" + questions[index] + ".json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();})
        .then((data) => {
            document.getElementById("ans" + (parseInt(index) + 1)).style.display = "block";
            document.getElementById("a" + (parseInt(index) + 1)).innerHTML = data.answer;
            document.getElementById("r" + (parseInt(index) + 1)).style.display = "block";
            document.getElementById("n" + (parseInt(index) + 1)).innerHTML = data.notes;
            document.getElementById("res" + (parseInt(index) + 1)).parentElement.style.display = "block";
            console.log(answers[index]);
            console.log(data.answer);
            if (answers[index] ==  data.answer) { //if answer is correct
                document.getElementById("res" + (parseInt(index) + 1)).innerHTML = "correct!";
                document.getElementById("res" + (parseInt(index) + 1)).style.color = "green";
                document.getElementById("res" + (parseInt(index) + 1)).parentElement.style.backgroundColor = "lightgreen";
                score++;
                console.log(score);
            }
            else { //if answer is not correct
                document.getElementById("res" + (parseInt(index) + 1)).innerHTML = "incorrect :(";
                document.getElementById("res" + (parseInt(index) + 1)).style.color = "red";
                document.getElementById("res" + (parseInt(index) + 1)).parentElement.style.backgroundColor = "lightpink";
            }
            document.getElementById("score-container").style.display = "block";
            document.getElementById("score").innerHTML = score + "/10";
        })
        .catch((error) => console.error("Unable to fetch data:", error));
    }
    console.log("score is " + score);
    //ERROR: this happens before score has been tallied, because xhlhttp is asynchronous. need to fix that somehow
    
    //make play again? button appear (or only make new quiz button appear after submission)
}
function setRegion(id) { //receives id of region and updates region variable as well as html and styles
    //should only run if answers are not submitted
    region = id;
    document.getElementById("al").style.backgroundColor = ""; //clear styles
    document.getElementById("na").style.backgroundColor = "";
    document.getElementById("eu").style.backgroundColor = "";
    document.getElementById(id).style.backgroundColor = "darkgrey";
    newQuiz();
}