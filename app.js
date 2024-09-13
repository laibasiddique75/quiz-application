const questions = [
    {
        
        question: 'Inside which HTML element do we put the JavaScript?',
       answers: [
      
        {option: 'javascript',correct:false},
        {option: 'js',correct:false},
        {option: 'scripting',correct:false},
        {option: 'script',correct:true} //correct
    ]
    },

    {
    question: 'Where is the correct place to insert a JavaScript?',
    answers: [
        {option: 'The "head" section',correct:false},
        {option: 'The "body" section',correct:false},
        {option: 'Both the "head" and "body" section are correct',correct:false},
        {option: 'The "body" section',correct:true}   //correct
    ]
    },
    
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        answers: [
      
            
              
                {option: 'if =! 5 then',correct:false},
                {option: 'if(i != 5)',correct:false},
                {option: 'if(i <> 5)',correct:false},
                {option: 'if(i != 5)',correct:true}  //  correct
            




        ]
    },
    {
        question: 'How can you add a comment in a JavaScript?',
        answers: [
            {option: '//This is a comment',correct:false},
           { option: 'This is a comment',correct:false},
            {option: '*/--This is a comment/*',correct:false},
           { option: '//This is a comment',correct:true} // correct
        ]
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
        {option: 'msg("Hello World");',correct:false},
        {option: 'alertBox("Hello World");',correct:false},
        {option: 'msgBox("Hello World");',correct:false},
        {option: 'alert("Hello World");',correct:true} //correct
        ]
    },
    {
        question: 'How do you create a function in JavaScript?',
        answers: [
        {option: 'function = myFunction()',correct:false},
        {option: 'function myFunction()',correct:false},
      { option: 'function:myFunction()',correct:false},
       {option: 'function myFunction()',correct:true} //correct
    ]
    },
    {
        question: 'How do you call a function named "myFunction"?',
        answers: [
        {option: 'call function myFunction()',correct:false},
        {option: 'myFunction()',correct:false},
        {option: 'call myFunction()',correct:false},
       { option: 'myFunction()',correct:true}  // correct
    ]
    }
];

const questionElement =document.getElementById("question");
const answerBtns = document.getElementById("answer-button");
const nxtBtn = document.getElementById("nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nxtBtn.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.option;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer)
        
    });
}




function resetState(){

    nxtBtn.style.display = "none";
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){

selectedBtn.classList.add("correct");
score++;
    }else{
        selectedBtn.classList.add("inCorrect")
    }

    Array.from(answerBtns.children).forEach(button => {
        if(button.dataset.correct === "true"){
button.classList.add("correct");
        }
        button.disabled = true;
    });
    nxtBtn.style.display ="block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nxtBtn.innerHTML = "Play Again";
    nxtBtn.style.display = "block"
}


function handleNextbutton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
showQuestion();
    }else{
        showScore();
    }
}

nxtBtn.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
handleNextbutton();
    }else{
        startQuiz();
    }
})
startQuiz();

















