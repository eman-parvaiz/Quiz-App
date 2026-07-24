// Get HTML Elements

const welcomeScreen = document.getElementById("welcomeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const username = document.getElementById("username");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const welcomeText = document.getElementById("welcomeText");
const progress = document.getElementById("progress");
const progressFill = document.getElementById("progressFill");
const question = document.getElementById("question");
const options = document.getElementById("options");

const finalMessage = document.getElementById("finalMessage");
const finalScore = document.getElementById("finalScore");

// Variables

let playerName = "";
let currentQuestion = 0;
let score = 0;
let selectedAnswer = -1;
let quizQuestions = [];

// Questions

const allQuestions = [

{
question:"HTML stands for?",
options:["Hyper Text Markup Language","High Tool Markup Language","Hyperlink Markup Language","Home Text Markup Language"],
answer:0
},

{
question:"Which tag creates a paragraph?",
options:["p","h1","div","br"],
answer:0
},

{
question:"Which tag inserts an image?",
options:["img","image","pic","src"],
answer:0
},

{
question:"Which tag creates a hyperlink?",
options:["a","link","url","href"],
answer:0
},

{
question:"Which tag creates a line break?",
options:["br","hr","break","lb"],
answer:0
},

{
question:"Which HTML tag creates a table?",
options:["table","tr","td","th"],
answer:0
},

{
question:"Which tag creates a table row?",
options:["tr","td","th","table"],
answer:0
},

{
question:"Which tag creates a table cell?",
options:["td","tr","th","table"],
answer:0
},

{
question:"Which tag creates a heading?",
options:["h1","head","title","p"],
answer:0
},

{
question:"Which input type hides text?",
options:["password","text","email","number"],
answer:0
},

{
question:"CSS stands for?",
options:["Cascading Style Sheets","Creative Style Sheets","Computer Style Sheets","Color Style Sheets"],
answer:0
},

{
question:"Which CSS property changes text color?",
options:["color","background","font-size","border"],
answer:0
},

{
question:"Which CSS property changes background color?",
options:["background-color","color","border","font-size"],
answer:0
},

{
question:"Which CSS property changes font size?",
options:["font-size","font-family","font-style","font-weight"],
answer:0
},

{
question:"Which CSS property makes text bold?",
options:["font-weight","font-size","font-style","color"],
answer:0
},

{
question:"Which CSS property centers text?",
options:["text-align","display","margin","padding"],
answer:0
},

{
question:"Which property rounds corners?",
options:["border-radius","border","radius","round"],
answer:0
},

{
question:"Which property adds outside spacing?",
options:["margin","padding","gap","border"],
answer:0
},

{
question:"Which property adds inside spacing?",
options:["padding","margin","border","gap"],
answer:0
},

{
question:"Which value makes Flexbox active?",
options:["flex","block","inline","grid"],
answer:0
},


{
question:"JavaScript is a?",
options:["Database","Programming Language","Browser","Operating System"],
answer:1
},

{
question:"JavaScript file extension?",
options:[".css",".js",".html",".java"],
answer:1
},

{
question:"Which keyword declares a variable?",
options:["const","let","int","value"],
answer:1
},

{
question:"Which keyword creates a constant?",
options:["let","const","var","new"],
answer:1
},

{
question:"Which function shows a popup message?",
options:["prompt()","alert()","console.log()","confirm()"],
answer:1
},

{
question:"Which method writes in the console?",
options:["alert()","console.log()","prompt()","confirm()"],
answer:1
},

{
question:"Which method finds an element by ID?",
options:["querySelector()","getElementById()","getElements()","findElement()"],
answer:1
},

{
question:"Which property changes HTML content?",
options:["value","innerHTML","style","text"],
answer:1
},

{
question:"Which event runs when a button is pressed?",
options:["mouseover","click","load","change"],
answer:1
},

{
question:"Which tag is used to write JavaScript?",
options:["style","script","js","javascript"],
answer:1
},

{
question:"Which tag links a CSS file?",
options:["style","link","css","head"],
answer:1
},

{
question:"Which input type is used for email?",
options:["text","email","mail","gmail"],
answer:1
},

{
question:"Which input type is used for numbers?",
options:["text","number","digit","numeric"],
answer:1
},

{
question:"Which tag creates a dropdown?",
options:["option","select","list","menu"],
answer:1
},

{
question:"Which tag is inside a dropdown?",
options:["select","option","list","value"],
answer:1
},

{
question:"Capital of Pakistan?",
options:["Karachi","Islamabad","Lahore","Quetta"],
answer:1
},

{
question:"Largest planet?",
options:["Earth","Jupiter","Mars","Venus"],
answer:1
},

{
question:"Which gas do humans breathe?",
options:["Nitrogen","Oxygen","Hydrogen","Helium"],
answer:1
},

{
question:"How many days are in a week?",
options:["6","7","8","5"],
answer:1
},

{
question:"How many months are in a year?",
options:["10","12","11","13"],
answer:1
},

,
{
question:"Which HTML tag displays the page title?",
options:["head","body","title","meta"],
answer:2
},

{
question:"Which HTML tag contains visible content?",
options:["head","html","body","meta"],
answer:2
},

{
question:"Which attribute specifies an image path?",
options:["href","alt","src","link"],
answer:2
},

{
question:"Which attribute specifies a link address?",
options:["src","target","href","alt"],
answer:2
},

{
question:"Which CSS property changes element width?",
options:["height","size","width","length"],
answer:2
},

{
question:"Which CSS property changes element height?",
options:["width","size","height","length"],
answer:2
},

{
question:"Which CSS property adds a shadow?",
options:["text-shadow","border-shadow","box-shadow","shadow"],
answer:2
},

{
question:"Which CSS property changes font family?",
options:["font-style","font-weight","font-family","font-size"],
answer:2
},

{
question:"Which CSS property changes font style?",
options:["font-weight","font-size","font-style","color"],
answer:2
},

{
question:"Which symbol selects a class in CSS?",
options:["#","*",".","@"],
answer:2
},

{
question:"Which symbol starts a JavaScript comment?",
options:["<!--","/*","//","#"],
answer:2
},

{
question:"Which loop repeats code?",
options:["if","switch","for","else"],
answer:2
},

{
question:"Which statement checks a condition?",
options:["for","while","if","loop"],
answer:2
},

{
question:"Which keyword works with if?",
options:["loop","case","else","break"],
answer:2
},

{
question:"Which operator compares values?",
options:["=","+","==","-"],
answer:2
},

{
question:"Fastest land animal?",
options:["Lion","Horse","Cheetah","Tiger"],
answer:2
},

{
question:"Red Planet is?",
options:["Earth","Venus","Mars","Jupiter"],
answer:2
},

{
question:"Smallest planet?",
options:["Earth","Saturn","Mercury","Mars"],
answer:2
},

{
question:"How many hours are in one day?",
options:["12","18","24","48"],
answer:2
},

{
question:"How many minutes are in one hour?",
options:["30","45","60","90"],
answer:2
},

{
question:"Which tag creates a form?",
options:["input","label","button","form"],
answer:3
},

{
question:"Which tag creates a text area?",
options:["input","text","box","textarea"],
answer:3
},

{
question:"Which tag creates a checkbox?",
options:["check","checkbox","tick","input"],
answer:3
},

{
question:"Which tag creates a button?",
options:["click","btn","input","button"],
answer:3
},

{
question:"Which HTML tag adds audio?",
options:["music","sound","media","audio"],
answer:3
},

{
question:"Which HTML tag adds video?",
options:["movie","media","play","video"],
answer:3
},

{
question:"Which CSS property changes the mouse pointer?",
options:["mouse","cursor-type","pointer","cursor"],
answer:3
},

{
question:"Which CSS property hides overflow content?",
options:["display","hidden","visibility","overflow"],
answer:3
},

{
question:"Which CSS property changes element position?",
options:["align","margin","location","position"],
answer:3
},

{
question:"Which CSS property controls stacking order?",
options:["layer","stack","order","z-index"],
answer:3
},

{
question:"Which JavaScript function asks for user input?",
options:["alert()","confirm()","console.log()","prompt()"],
answer:3
},

{
question:"Which JavaScript function asks Yes/No?",
options:["alert()","console.log()","prompt()","confirm()"],
answer:3
},

{
question:"Which keyword exits a loop?",
options:["continue","return","stop","break"],
answer:3
},

{
question:"Which keyword skips the current loop iteration?",
options:["skip","pass","next","continue"],
answer:3
},

{
question:"Which keyword creates a function?",
options:["method","func","define","function"],
answer:3
},

{
question:"Largest ocean?",
options:["Indian","Atlantic","Arctic","Pacific"],
answer:3
},

{
question:"National language of Pakistan?",
options:["Punjabi","English","Sindhi","Urdu"],
answer:3
},

{
question:"Which planet do we live on?",
options:["Mars","Venus","Jupiter","Earth"],
answer:3
},

{
question:"How many seconds are in one minute?",
options:["30","45","90","60"],
answer:3
},

{
question:"Water chemical formula?",
options:["CO2","O2","NaCl","H2O"],
answer:3
},

{
question:"CPU stands for?",
options:["Central Process Unit","Computer Processing Unit","Central Program Unit","Central Processing Unit"],
answer:3
},

{
question:"RAM stands for?",
options:["Random Access Machine","Read Access Memory","Run Access Memory","Random Access Memory"],
answer:3
},

{
question:"Which device is used for typing?",
options:["Mouse","Monitor","Printer","Keyboard"],
answer:3
},

{
question:"Which device displays output?",
options:["CPU","Keyboard","Mouse","Monitor"],
answer:3
},

{
question:"Which device prints documents?",
options:["Scanner","Monitor","Speaker","Printer"],
answer:3
},

{
question:"Which device scans documents?",
options:["Printer","Keyboard","Mouse","Scanner"],
answer:3
},

{
question:"Which key moves to a new line?",
options:["Shift","Ctrl","Alt","Enter"],
answer:3
},

{
question:"Which key removes text on the left?",
options:["Delete","Shift","Ctrl","Backspace"],
answer:3
},

{
question:"Which browser is developed by Google?",
options:["Firefox","Edge","Safari","Chrome"],
answer:3
},

{
question:"Which symbol is used for an ID selector in CSS?",
options:[".","*","@","#"],
answer:3
},

{
question:"Which HTML tag creates an ordered list?",
options:["ul","li","dl","ol"],
answer:3
},

{
question:"Which HTML tag creates an unordered list?",
options:["ol","li","dl","ul"],
answer:3
},

{
question:"Which CSS property makes text italic?",
options:["font-weight","font-family","text-style","font-style"],
answer:3
},

{
question:"Which JavaScript keyword declares a block-scoped variable?",
options:["var","const","value","let"],
answer:3
},

{
question:"Which operator is used for addition?",
options:["-","*","/","+"],
answer:3
},

{
question:"Which country is famous for the Eiffel Tower?",
options:["Italy","Spain","Germany","France"],
answer:3
},

{
question:"Which is the largest continent?",
options:["Europe","Africa","Australia","Asia"],
answer:3
},

{
question:"Which is the national flower of Pakistan?",
options:["Rose","Sunflower","Lily","Jasmine"],
answer:3
},

{
question:"How many colors are there in a rainbow?",
options:["5","6","8","7"],
answer:3
},

{
question:"Which is known as the Blue Planet?",
options:["Mars","Venus","Jupiter","Earth"],
answer:3
}

];

function getRandomQuestions() {

    let shuffled = [...allQuestions];

    shuffled.sort(function () {
        return Math.random() - 0.5;
    });

    quizQuestions = shuffled.slice(0, 20);

}
// Start Quiz

startBtn.addEventListener("click", function () {

    if (username.value.trim() == "") {
        alert("Please enter your name!");
        return;
    }

    playerName = username.value;

    currentQuestion = 0;
    score = 0;

    getRandomQuestions();

    welcomeScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    loadQuestion();

});

// Load Question

function loadQuestion() {

    selectedAnswer = -1;
    nextBtn.disabled = true;

    let current = quizQuestions[currentQuestion];

    welcomeText.innerHTML = "Welcome, " + playerName + " 👋";

    progress.innerHTML = "Question " + (currentQuestion + 1) + " / " + quizQuestions.length;

    progressFill.style.width = ((currentQuestion + 1) / quizQuestions.length) * 100 + "%";

    question.innerHTML = current.question;

    options.innerHTML = "";

    for (let i = 0; i < current.options.length; i++) {

        let option = document.createElement("div");

        option.classList.add("option");

        option.innerHTML = current.options[i];

        option.onclick = function () {

            let allOptions = document.querySelectorAll(".option");

            for (let j = 0; j < allOptions.length; j++) {
                allOptions[j].classList.remove("selected");
            }

            option.classList.add("selected");

            selectedAnswer = i;

            nextBtn.disabled = false;

        };

        options.appendChild(option);

    }

}

// Next Button
nextBtn.addEventListener("click", function () {

    if (selectedAnswer == quizQuestions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }

});
// Show Result

function showResult() {

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    let percentage = (score / quizQuestions.length) * 100;

    if (percentage >= 90) {
        finalMessage.innerHTML = "🏆 Excellent, " + playerName + "!";
    }
    else if (percentage >= 70) {
        finalMessage.innerHTML = "🌟 Great Job, " + playerName + "!";
    }
    else if (percentage >= 50) {
        finalMessage.innerHTML = "👍 Good Try, " + playerName + "!";
    }
    else {
        finalMessage.innerHTML = "📚 Keep Practicing, " + playerName + "!";
    }

    finalScore.innerHTML = "Your Score: " + score + " / " + quizQuestions.length;

}
// Restart Quiz

restartBtn.addEventListener("click", function () {

    currentQuestion = 0;
    score = 0;
    selectedAnswer = -1;
    playerName = "";

    username.value = "";

    resultScreen.classList.add("hidden");
    welcomeScreen.classList.remove("hidden");

});