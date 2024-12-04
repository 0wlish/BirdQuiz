//TODO:
//shuffle options for answers
//lightbox for images
//figure out why cookie is a bit screwy
//do something to figure out how to make server directory hidden on Pages website

const questions = []; //holds addresses of questions in json file
const answers = []; //hold values of answers (a String equal to one of the options) for each question

function makeQuiz() {
    if (getCookie("q1") == "") { //if cookie has not been set
        for (let i = 0; i < 10; i++) { //populate questions with numbers 0..70, then generate list of images
            let num = Math.floor(Math.random() * 71);
            if (i == 0) {
                questions[0] = num;
            }
            else {
                while (questions.indexOf(num) != -1) { //do this while num already exists in question
                    num = Math.floor(Math.random() * 71);
                }
                questions[i] = num;
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
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function() {
            const q = JSON.parse(this.responseText);
            document.getElementById("i" + (i + 1)).src = "/server/images/" + q.url;
            document.getElementById("l" + (i + 1)).innerHTML = q.location;
            document.getElementById((i + 1) + "o1").innerHTML = q.o1;
            document.getElementById((i + 1) + "o2").innerHTML = q.o2;
            document.getElementById((i + 1) + "o3").innerHTML = q.o3;
            document.getElementById((i + 1) + "o4").innerHTML = q.o4;
        }
        xmlhttp.open("GET", "/server/questions/" + questions[i] + ".json");
        xmlhttp.send();  
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
    document.cookie = name + "=" + value + ";" + "path=/;SameSite=None; Secure";
}
function deleteCookie(name) { //run when answers are submitted
    document.cookie = name+"=; Max-Age=-99999999;SameSite=None; Secure";
}
function newQuiz() {
    deleteCookie("q1");
    for (let i = 1; i <= 10; i++) {
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
    document.getElementById(id).style.backgroundColor = "lightgrey";
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

    tallyAnswer().then(
        function() { //not working
            console.log("here");
            document.getElementById("score-container").style.display = "block";
            document.getElementById("score").innerHTML = score + "/10";
        }
    );

    async function tallyAnswer() { //returns score once answers have been tallied
        for (let index in answers) {
            const xmlhttp = new XMLHttpRequest();
            xmlhttp.onload = function() {
                const q = JSON.parse(this.responseText);
                document.getElementById("ans" + (parseInt(index) + 1)).style.display = "block";
                
                //console.log(index);
                //console.log(answers[index]);
                document.getElementById("a" + (parseInt(index) + 1)).innerHTML = q.answer;
                document.getElementById("r" + (parseInt(index) + 1)).style.display = "block";
                document.getElementById("n" + (parseInt(index) + 1)).innerHTML = q.notes;
                document.getElementById("res" + (parseInt(index) + 1)).parentElement.style.display = "block";
                console.log(answers[index]);
                console.log(q.answer);
                if (answers[index] ==  q.answer) { //if answer is correct
                    //console.log("Correct");
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
                
            }
            xmlhttp.open("GET", "/server/answers/" + questions[index] + ".json");
            xmlhttp.send();
        }
        console.log("score is " + score);
        return score;
    }
    

    //ERROR: this happens before score has been tallied, because xhlhttp is asynchronous. need to fix that somehow
    
    //make play again? button appear (or only make new quiz button appear after submission)
}