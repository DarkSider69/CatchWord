const startButton = document.querySelector(".start")
const startGame = document.querySelector(".start-game")
const dnone = document.querySelector(".d-none")
const seconds = document.querySelector(".seconds")
const randomP = document.querySelector(".randomGenP")
const inp = document.querySelector(".input")
const cwvalue = document.querySelector(".cw-value")
const timersc = document.querySelector(".timer-sc")
const iw = document.querySelector(".incor-word")
const stagevalue = document.querySelector(".stage-value")

let timer = 20
let correctWord = 0
let stage = 0

const randomWords = ["mankana", "gori", "korpusi", "kompiuteri", "leptopi", "avtomobili", "saxeli", "gvari", "browser", "samzareulo", "turbo", "kompresori", "dzravi", "tbilisi", "georgia", 
"php", "clock", "alligator", "whale", "robot", "zoo", "dinosaur", "island", "frog", "drum", "lizard", "duck", "shirt", "monster", "hand"]
const randomWordsS1 = ["CLS218", "sprinkler", "dimple", "bowtie", "Georgia", "Canada", "dentist", "correct", "applause", "apologies", "landscape", "spaceship", "dodgeball"]
const randomWordsS2 = ["cartoonist", "javascript", "translate", "grdzeli-Xidi", "gymnast", "protestant", "apparatus", "writhe", "Everglades", "one-way street", 
"hypothermia", "punishment", "diversify", "population"]

let randomGen = randomWords[Math.floor(Math.random() * randomWords.length)];

startButton.addEventListener("click", function() {
    // seconds.innerText = "" es kleoba ar damaviwkdes 
    startGame.style.display = "none"
    dnone.style.display = "block"
})

randomP.innerText = randomGen

// Stage 0 function 
function generatedWord() {
    if(randomP.innerText == inp.value ) {
        randomGen = randomWords[Math.floor(Math.random() * randomWords.length)];
        inp.value = ""
        randomP.innerText = randomGen
        ++correctWord
        stage = Math.floor(correctWord / 5)
        timer++
    }
    timersc.innerText = timer
    cwvalue.innerText = correctWord
    stagevalue.innerText = stage
}

// Stage 1 function 

function generatedWordS1() {
    if(randomP.innerText == inp.value ) {
        randomGen = randomWordsS1[Math.floor(Math.random() * randomWordsS1.length)];
        inp.value = ""
        randomP.innerText = randomGen
        ++correctWord
        stage = Math.floor(correctWord / 5)
        timer++
    }
    timersc.innerText = timer
    cwvalue.innerText = correctWord
    stagevalue.innerText = stage
}

// Stage 2 function 

function generatedWordS2() {
    if(randomP.innerText == inp.value ) {
        randomGen = randomWordsS2[Math.floor(Math.random() * randomWordsS2.length)];
        inp.value = ""
        randomP.innerText = randomGen
        ++correctWord
        stage = Math.floor(correctWord / 5)
        timer++
    }
    timersc.innerText = timer
    cwvalue.innerText = correctWord
    stagevalue.innerText = stage
}


function stageLevel() {
    if(stage == 0) {
        generatedWord()
    }
    else if(stage == 1) {
        generatedWordS1()
    }
    else {
        generatedWordS2()
    }
}

inp.addEventListener("keyup", stageLevel)
