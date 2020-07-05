/*
(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  
  var question1 = new Question('Where is Bolivia?', ['Africa', 'Europe', 'South America'], 2);
  var question2 = new Question('When was Napoleon born?', ['1769', '1760', '1796'], 0);
  var question3 = new Question('When did America gain her independence?', ['1767', '1776', '1770'], 1);
  var question4 = new Question('Where was John Kennedy assassinated?', ['Dallas', 'Austin', 'Houston'], 0);
  
  
  // JONAS WAY!!
  Question.prototype.displayQuestion = function() {
    console.log(this.question);
  
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }
  
  Question.prototype.checkAnswer = function(ans, callback) {
    var sc;
    
    if (ans === this.correct) {
      console.log('Correct answer!');
      sc = callback(true);
    } else {
      console.log('Wrong answer! Try again :)');
      
      sc = callback(false);
    }

    this.displayScore(sc);
  }

  Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('-------------------');
  }

  var questions = [question1, question2, question3, question4];

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    }
  }
  var keepScore = score();

  function nextQuestion() {
  
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    
    var answer = prompt('Please select the correct answer.');
    

    if(answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore);

      nextQuestion();
    } 
    
  }

  nextQuestion();
})();
*/


// MY WAY!!
var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  
  var question1 = new Question('Where is Bolivia?', ['Africa', 'Europe', 'South America'], 2);
  var question2 = new Question('When was Napoleon born?', ['1769', '1760', '1796'], 0);
  var question3 = new Question('When did America gain her independence?', ['1767', '1776', '1770'], 1);
  var question4 = new Question('Where was John Kennedy assassinated?', ['Dallas', 'Austin', 'Houston'], 0);

  var questions = [question1, question2, question3, question4];


(function () {
  var random,userAnswer,count=0;
  
  function showQuestion() {
    random =  Math.floor(Math.random() * questions.length);

    console.log(random+ '. ' + questions[random].question);

    for (var i = 0; i < questions[random].answers.length; i++) {
      console.log(i + '. ' + questions[random].answers[i]);
    }

    userAnswer = prompt('Type a number of the correct answer! Type \'exit\' to close the game!');
    console.log('Your answer is ' + userAnswer+ '. ' + questions[random].answers[userAnswer]);
  }

  showQuestion();

  if (userAnswer == questions[random].correct) {
    console.log('Correct Answer! :)');
    count++;
    console.log('Correctly Answered: ' + count);
  } else {
    console.log('Wrong Answer! :S');
    console.log('Correctly Answered: ' + count);
  }

  while (userAnswer !== 'exit') {
    showQuestion();
    
    if (userAnswer == questions[random].correct) {
      console.log('Correct Answer! :)');
      count++;
    console.log('Correctly Answered: ' + count);
    } else {
      console.log('Wrong Answer! :S');
      console.log('Correctly Answered: ' + count);
    }
  }
  
  
})();



