const correctAnswerIcon = "https://png.pngtree.com/png-vector/20191007/ourmid/pngtree-green-check-mark-icon-cartoon-style-png-image_1796237.jpg";
const wrongAnswerIcon= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHo7UvrZE3T3GpSUb-75EZ9fC1j_IH1yZYuQ&usqp=CAU";
const warningIcon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2c6fHTn8d9gY-eFTEr8XCoDNNaV68Q4kqFg&usqp=CAU";

let questionCounter = 0;
let score = 0;
let questionsArray = [
  {
    question: "1. Which of the following is not a phase of SDLC",
     optionone: "Requirement gathering",
    optiontwo: "Testing",
    optionthree: "Analysis",
    optionfour: "NOTA",
    correctAnswer: "NOTA"
  },
  {
     question: "2. The name of the testing which is done to make sure the existing features are not affected by new changes",
    optionone: "Recursive testing",
    optionfour: "Regression testing",
    optiontwo: "White box testing",
    optionthree: "Unit testing",
    correctAnswer: "Regression testing"
  
  },
  {
     question: "3. Agile and DevOps are similar but differ in a few important aspect.Which statement is correct?",
    optionone: "Agile is a change of thinking whereas DevOps is actual organisation cultural change",
    optiontwo: "Agile is actual organisational cultural change whereas DevOps is a change of thinking.",
    optionthree: "Agile is process driven whereas DevOps is role driven.",
    optionfour: "Agile is role driven whereas DevOps is process driven.",
    correctAnswer: "Agile is a change of thinking whereas DevOps is actual organisation cultural change"
    
  },
  {
    question: "4. Which statement best describes the relationship between DevOps and Continuous Delivery?",
    optionone: "DevOps and Continuous Delivery are the same thing.",
    optiontwo: "DevOps and Continuous Delivery are not related and are mutually exclusive",
    optionthree: "DevOps and Continuous Delivery share a background in Agile methods and LEAN thinking.",
    optionfour: "DevOps and Continuous Delivery share common processes.",
    correctAnswer: "DevOps and Continuous Delivery share a background in Agile methods and LEAN thinking."
  },
  {
    question: "5. What is the requirement for using Jenkins?",
    optionone: "A source code repository which is accessible, for instance, a Git repository",
    optiontwo: "A working build script, e.g., a Maven script, checked into the repository",
    optionthree: " Only option 1",
    optionfour: "Both Option 1 & 2",
    correctAnswer: "Both Option 1 & 2"
  },
  {
    question: "6. Which of the following tasks is critical for test planning?",
    optionone: " Measuring and analyzing results",
    optiontwo: "Preparing test specifications.",
    optionthree: "Determining the test approach.",
    optionfour: "Evaluating exit criteria and reporting.",
    correctAnswer: "Determining the test approach."
  },
   {
    question: "7.__________ is a method of software testing that examines the functionality of an application without looking into its internal structures or working",
    optionone: "Black-box testing",
    optiontwo: "White-box testing",
    optionthree: "Smoke testing",
    optionfour: "Unit Testing",
    correctAnswer: "Black-box testing"
  },
  {
    question: "8. Which of the following statements are true for inheritance in Java?",
    optionone: "You can extend multiple classes in java.",
    optiontwo: "The “extend” keyword is used to extend a class in java.",
    optionthree: "We can’t extend Final classes in java.",
    optionfour: "Private members of the superclass are accessible to the subclass.",
    correctAnswer: "We can’t extend Final classes in java."
  },
  {
    question: "9. What are the limitations or drawbacks of Cucumber?",
    optionone: "If not planned and maintained properly, one might end-up with a lot of feature files which can be difficult to maintain",
    optiontwo: "Default reporting mechanism in cucumber is not so great. So often test automation teams end up creating their own reporting mechanisms",
    optionthree: " Over a period of time, it might get difficult to remember the exact language already created to use in feature files",
    optionfour: "All of the above",
    correctAnswer: "All of the above"
  },
  {
    question: "10. Select Hooks available in Cucumber",
    optionone: "Before",
    optiontwo: "AfterSuite",
    optionthree: "BeforeTest",
    optionfour: "All of the above",
    correctAnswer: "All of the above"
  },
  {
    question: "11. Identify the keyword among the following that makes a variable belong to a class,rather than being defined for each instance of the class.",
    optionone: "final",
    optiontwo: "static",
    optionthree: "abstract",
    optionfour: "super",
    correctAnswer: "static"
  },
  {
    question: "12. compareTo() returns",
    optionone: "True",
    optiontwo: "False",
    optionthree: "An int value",
    optionfour: "An string value",
    correctAnswer: "An int value"
  },
  {
    question: "13. Where does the system stores parameters and local variables whenever a method is invoked?",
    optionone: "Array",
    optiontwo: "Stack",
    optionthree: "Heap",
    optionfour: "Tree",
    correctAnswer: "Stack"
  },
  {
    question: "14. Identify the modifier which cannot be used for constructor.",
    optionone: "static",
    optiontwo: "public",
    optionthree: "protected",
    optionfour: "private",
    correctAnswer: "static"
  },
  {
    question: "15. Identify the correct way of declaring constructor.",
    optionone: "Solution(){}",
    optiontwo: "public Solution(){}",
    optionthree: "Solution(void){}",
    optionfour: "Both A & B",
    correctAnswer: "Both A & B"
  }
  ];

let questionsCount = questionsArray.length;

function handleStartClick(){
	$('.js-start-button').on('click',function(event){
		console.log("handleStartClick() ran");
		$('.progress-section').show();
		$('.start-section').hide();
		$('.end-section').hide();
		$('.quiz-box').fadeIn("slow");
		renderQuizBox(); 

	});
}

// This function displays the quizz box with the question, options, 
// score and question count
function renderQuizBox(){
  renderQuestionCount();
  renderQuestion();
  renderScore();
}
function renderScore(){
  $(".progress-section .score-card").text(`${score}/${questionsCount}`);
}
function renderQuestionCount(){
  $(".progress-section .question-count").text(`Question ${questionCounter+1} of ${questionsCount}`);
}

// This function renders a new question
function renderQuestion(){
  $(".questions-form p").text(questionsArray[questionCounter].question);
  $(".questions-form #option-one").val(questionsArray[questionCounter].optionone);
  $(".questions-form #option-two").val(questionsArray[questionCounter].optiontwo);
  $(".questions-form #option-three").val(questionsArray[questionCounter].optionthree);
  $(".questions-form #option-four").val(questionsArray[questionCounter].optionfour);
   
  $(".questions-form #option-one").next().text(questionsArray[questionCounter].optionone);
  $(".questions-form #option-two").next().text(questionsArray[questionCounter].optiontwo);
  $(".questions-form #option-three").next().text(questionsArray[questionCounter].optionthree);
  $(".questions-form #option-four").next().text(questionsArray[questionCounter].optionfour);
}

function handleSubmitAnswer(){
  $('.js-submit-button').on('click',function(event){
    console.log("handleSubmitAnswer() ran");
    let selectedOption = $('input[type=radio]:checked').val();
    if(selectedOption === undefined) {
       displayPopup(false, selectedOption);
    }
    else{
     //reset radio button
      $('input[type=radio]:checked').attr('checked',false);
      checkAnswer(selectedOption);
    }
 });
}


// This function checks whether the answer selected by the
// user is correct or not
function checkAnswer(selected){
  let rightAnswer = questionsArray[questionCounter].correctAnswer;
  
  if(selected === rightAnswer){
    score++;
    displayPopup(true, rightAnswer);
  } 
  else{
   displayPopup(false, rightAnswer);
  }
}

//This function gives feedback to the user whether 
//the option selected in correct or wrong. 
//It also alerts the user if no option is selected
function displayPopup(statusFlag, answer){
  $('.feedback-section').show();
  if(statusFlag){
    $(".popup-box img").attr("src",correctAnswerIcon);
    $(".popup-box #popup-text").text("You are right!");
    $(".popup-box").show();
  }
  else{
      if(answer === undefined) {
         questionCounter--;
         $(".popup-box img").attr("src",warningIcon);
         $(".popup-box #popup-text").text('Please select an option');
       }
      else{
         $(".popup-box img").attr("src",wrongAnswerIcon);
        $(".popup-box #popup-text").text(`Sorry, the correct answer was: ${answer}`);
      }
    }
     $(".popup-box").show();
}

//This function will proceed to the next question or display the final score
//based on the question count.
function handlePopupClose(){
  $('.js-close-button').on('click', function(event){
    console.log("handlePopupClose() ran");
    $('.popup-box').hide();
    $('.feedback-section').hide();
    $('.quiz-box').hide().fadeIn();
    questionCounter++;
    if(questionCounter < questionsArray.length) {
       $('.quiz-box').fadeIn();
       renderQuizBox();
    }
    else{
      $('.quiz-box').hide();
      displayFinalScore();
    }
  });
}

//This function displays the final score once the quiz is completed
function displayFinalScore(){
   $('.end-section').fadeIn(1000);
   $('.end-section h4').text(`Your Score is: ${score}/${questionsCount}`);
//    $('.correct .count' ).text(score);
//    $('.wrong .count').text(questionsCount - score);
   resetQuiz();
}

//This function resets the questions and score
function resetQuiz(){
  questionCounter = 0;
  score = 0;
}

//This function will start over the quiz
function handleStartOver(){
  $('.js-startover-button').on('click',function(event){
    console.log("handleStartOver() ran");
    $('.end-section').hide();
    $('.quiz-box').fadeIn();
    renderQuizBox();
  });
}

function init(){
  $('.end-section').hide();
  $('.progress-section').hide();
  $('.quiz-box').hide();
  $('.feedback-section').hide();
  handleStartClick();
  handleSubmitAnswer();
  handlePopupClose();
  handleStartOver()
}
$(init());