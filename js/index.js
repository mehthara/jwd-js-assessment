/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
  let quizOver;
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    //console.log(e);
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
    timedText();
    let counter = 60;
    function timedText() {
      let x = document.getElementById("time");
      
      const timer = setInterval(function(){
           // console.log(counter);
            counter--
            x.innerText = `${counter} seconds`;
            if (counter === 0) {
              
              clearInterval(timer);
              submit.click();
            }
      }, 1000);
    
    }
    timedText();
    
  });

 
  
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia?',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: 'Which among the following is written by Shakespeare?',
      o: ['Pride and Prejudice', 'David Copperfield', 'Lyrical Ballads', 'King Lear'],
      a:3,
    },
    {
      q: 'Mona Lisa was painted by :',
      o: ['Pablo Picasso', 'Van Gogh', 'Leonardo daVinci', 'Michelangelo'],
      a: 2,
    }
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
    
    
    timedText();
    function timedText() {
      let x = document.getElementById("time");
      let counter = 10;
      const timer = setInterval(function(){
           // console.log(counter);
            counter--
            x.innerText = `${counter} seconds`;
            if (counter === 0) {
              
              clearInterval(timer);
              submit.click();
            }
      }, 1000);

  };
  }
  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        //console.log(li);
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
       // console.log(liElement);
        radioElement = document.querySelector('#' + r);

        if (quizItem.a == i) {
          //change background color of li element here
          document.getElementById(li).style.background = "lightgreen";
        
        }

        if (radioElement.checked) {
          // code for task 1 goes here
          if(i==quizItem.a){
              score += 1;
          }

        }
      }
    });
    return score;
    
    
  };

  // call the displayQuiz function
  displayQuiz();
 
 
  //on submit button click
  const submit = document.getElementById('btnSubmit');
  submit.addEventListener('click', () => {
        counter = 0;
        let finalScore = calculateScore();
        submit.style.display ='none';
        const scoreDisp = document.getElementById('score');
        scoreDisp.innerHTML = `<div class="p-5" style="background-color: #f4f4f4;"><p>Your score is ${finalScore}</p>
        <p class="badge ${finalScore > 4 ? 'badge-success' : 'badge-warning'}">${finalScore > 4 ? 'You won' : 'Try again'}</p></div>`;
  });

  //on reset button click
  const reset = document.querySelector('#btnReset');
  reset.addEventListener('click', () =>{
        window.location.reload();
  });

  
});


