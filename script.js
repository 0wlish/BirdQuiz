//TODO:
//put answer right after image??
//highlight answer in green?
//nicer colors
//jump to top when answers are submitted -- display score at the top
//make list of questions from previous test, and make sure that user doesn't get those questions in the next test (extra feature - not important)

const questions = []; //holds addresses of questions in json file
const answers = []; //hold values of answers (a String equal to one of the options) for each question
let region = "AL"; //holds region for birds, default is all

const NUM_EU = 30; //number of questions in each region
const NUM_NA = 50;
const NUM_AL = 80; //number of questions overall

let isSubmitted = false; //tracks if answers have been submitted

setRegion("al"); //set region to all birds (default)

function makeQuiz() {
    if (getCookie("q1") == "") { //if cookie has not been set
        resetQuestionArray();
        if (region != "al") { //if data needs to be fetched from server
            fetch("https://owlish.hackclub.app/BirdQuiz/server/" + region + ".json", {mode: "cors"})
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();})
            .then((data) => {
                console.log(data);
                for (let i = 0; i < 10; i++) { //populate questions with numbers 0..70, then generate list of images
                    let num = 0;
                    if (region == "na") {
                        num = Math.floor(Math.random() * NUM_NA);
                    }
                    else if (region == "eu") {
                        num = Math.floor(Math.random() * NUM_EU);
                    }
                    if (i == 0) {
                        questions[0] = parseInt(data.birds[num]);
                    }
                    else {
                        while (questions.indexOf(parseInt(data.birds[num])) != -1) { //do this while num already exists in question
                            if (region == "na") {
                                num = Math.floor(Math.random() * NUM_NA);
                            }
                            else if (region == "eu") {
                                num = Math.floor(Math.random() * NUM_EU);
                            }
                        }
                        questions[i] = parseInt(data.birds[num]);
                    }
                    setCookie("q" + (i + 1), num);
                    //update webpage
                    setQuiz(i);
                }
            })
            .catch((error) => console.error("Unable to fetch data:", error)); //fetch is working
        }
        else { //if region == al
            for (let i = 0; i < 10; i++) { //populate questions with numbers 0..70, then generate list of images
                let num = Math.floor(Math.random() * NUM_NA);
                
                if (i == 0) {
                    questions[0] = num;
                }
                else {
                    while (questions.indexOf(num) != -1) { //do this while num already exists in question
                        num = Math.floor(Math.random() * NUM_AL);
                    }
                    questions[i] = num;
                }
                setCookie("q" + (i + 1), num);
                setQuiz(i);
            }
        }
    }
    else { //if cookie has been set
        for (let i = 0; i < 10; i++) {
            questions[i] = getCookie("q" + (i + 1));
            setQuiz(i);
        }
    }

    function setQuiz(i) {
        fetch("https://owlish.hackclub.app/BirdQuiz/server/questions/" + questions[i] + ".json", {mode: "cors"})
        .then((res) => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();})
        .then((data) => {
            document.getElementById("i" + (i + 1)).src = "https://owlish.hackclub.app/BirdQuiz/server/images/" + data.url;
            document.getElementById("l" + (i + 1)).innerHTML = data.location;
            //console.log("loc: " + data.location);
            //console.log("index: " + questions[i]);
            const options = shuffleOptions(data.o1, data.o2, data.o3, data.o4);
            document.getElementById((i + 1) + "o1").innerHTML = options[0];
            document.getElementById((i + 1) + "o2").innerHTML = options[1];
            document.getElementById((i + 1) + "o3").innerHTML = options[2];
            document.getElementById((i + 1) + "o4").innerHTML = options[3];})
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
    isSubmitted = false;
    for (let i = 1; i <= 10; i++) {
        deleteCookie("q" + i);
        clearStyles(i);
        answers[i-1] = -1; //clear answer array
    }
    clearAnswerNotes();
    makeQuiz();
}
function setAnswer(id) {
    //recieves id of currently selected answer
    if (!isSubmitted) {
        let index = parseInt(id.substring(0,2)) - 1;
        let answer = document.getElementById(id).innerHTML;
        clearStyles(index + 1);
        document.getElementById(id).style.backgroundColor = "darkgrey";
        answers[index] = answer;
    }
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
    //document.getElementById("score-container").style.display = "none"; //debugging scorebox
}
function submitAnswers() {
    //checks if answers are correct
    if (answers.indexOf(-1) != -1) {
        alert("You haven't answered all the questions!");
    }
    else {
        isSubmitted = true;
        let score = 0;

        for (let index in answers) {
            //somehow disable choosing a new answer

            fetch("https://owlish.hackclub.app/BirdQuiz/server/answers/" + questions[index] + ".json", {mode: "cors"})
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
        window.location.href="#top";
    }  
    //make play again? button appear (or only make new quiz button appear after submission)
}
function setRegion(id) { //receives id of region and updates region variable as well as html and styles
    //should only run if answers are not submitted
    //ISSUE: clears cookies every time page is reloaded -- bad
    region = id;
    document.getElementById("al").style.backgroundColor = ""; //clear styles
    document.getElementById("na").style.backgroundColor = "";
    document.getElementById("eu").style.backgroundColor = "";
    document.getElementById(id).style.backgroundColor = "darkgrey";
    newQuiz();
}
function resetQuestionArray() {
    for (let q in questions) {
        questions[q] = -1;
    }
}
function openModal(id) {
    const img = document.getElementById(id);
    document.getElementById("modal").style.display = "block";
    document.getElementById("modalImage").src = img.src;
}
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
function shuffleOptions(o1, o2, o3, o4) {
    //recieves four options as strings and returns an array of those shuffled options
    const options = [o1, o2, o3, o4];
    for (let i = 0; i < 100; i++) { //shuffle 1000 times
        let index = Math.floor(Math.random() * 4); //generate random num 0..3
        let o = options[0];
        options[0] = options[index];
        options[index] = o;
    }
    return options;
}