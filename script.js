const quizData=[
    {
        question:'How old is krati',
        a:'21',
        b:'22',
        c:'23',
        d:'25',
        correct:'d'
    },
    {
        question:'what html full form',
        a:'hyper text markup language',
        b:'high test machine lanuguage',
        c:'hindus time mix lanugauge',
        d:'hindi tone',
        correct:'a'
    },
    {
        question:'js stand for',
        a:'javasript',
        b:'javascript',
        c:'java',
        d:'jesesroll',
        correct:'b'
    },
    {
        question:'css stand for',
        a:'circle semi style',
        b:'cirular semi style',
        c:'cascading style sheet',
        d:'css',
        correct:'c'
    }
];
const quiz=document.getElementById("quiz");

const answerEls=document.querySelectorAll(".answer");


const questionEl=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit');

let currentQuiz=0;
let score=0;


loadQuiz();
function loadQuiz(){
    deselectAnswers();
    const currentQuizData=quizData[currentQuiz];
    questionEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;

}
function getSelected(){
    let answe=undefined;
    answerEls.forEach((answerEl)=>{
       if(answerEl.checked){
        answer=answerEl.id;}
    });
    return answer;
}
function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked=false;
     });
}
submitBtn.addEventListener("click",()=>{

    const answer=getSelected();
     if(answer){
         if(answer===quizData[currentQuiz].correct){
            score++;
         }

        currentQuiz++;
        
      if(currentQuiz<quizData.length)
         loadQuiz();
      else{
        //to do show result
      quiz.innerHTML=
      `<h2>you answered correctly at ${score}/${quizData.length} questions</h2>
      
      <button onclick="location.reload()">Reload</button>`;
    }
}
});