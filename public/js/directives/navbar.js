app.directive('navbarlink', function(quizAFactory, $localStorage) {
		return {
			restrict: 'AE',
			scope: {},
			templateUrl: '../../tpl/module-1/blocks/nav.html',
			link: function(scope, elem, attrs) {

				scope.start = function() {
					scope.id = 0;
					scope.quizOver = false;
					scope.inProgress = true;
					// starts out true as default, so that it's not undefined
					scope.correctAns = true;
					// scope.explanation = false;
					scope.getQuestion();
				};

				scope.reset = function() {
					scope.inProgress = false;
					scope.score = 0;
				}

				scope.getQuestion = function() {
					// number of questions in game
					scope.questions = quizAFactory.getQuestions();
					scope.questionCount = scope.questions.length;

					// current question
					console.log("current question: " + scope.id );
					console.log("correctAns: " + scope.correctAns );

					// queries questionFactory for info on the questions
					var q = quizAFactory.getQuestion(scope.id);
					if(q) {
						scope.question = q.question;
						scope.options = q.options;
						scope.answer = q.answer;
						scope.explanation = q.explanation;
						scope.answerMode = true;
					} else {
						scope.quizOver = true;
						console.log("quizOver: " + scope.quizOver)
						// Set quiza_done to true in localStorage
						$localStorage.quiz.quiza_done = true;
					}
				};

				scope.checkAnswer = function(id) {
					console.log("checking answer")

					console.log("id: "+ id)
					console.log("value: "+ scope.options[id].value)

					var ans = id;

					if(ans == scope.options[scope.answer].id) {
						scope.score++;
						scope.correctAns = true;
						scope.explanationMode = true;
					} else {
						scope.correctAns = false;
					}

					scope.answerMode = false;
				};


				scope.nextQuestion = function() {
					scope.id++;
					scope.getQuestion();
					scope.explanationMode = false;
				}

				scope.init = function() {
					console.log("init function");
	      			// if quiz hasn't been played before, launch it immediately 
		      		if ( angular.isDefined($localStorage.quiz) && ($localStorage.quiz.quiza_done == false) ) {
					  	console.log("$localstorage.quiza_done: "+ $localStorage.quiz.quiza_done);
		      			scope.start();
					  	console.log("quiz initialized");
					}
					// if quiz has already been played, launch "Congrats" page with reset option 
					else if ( angular.isDefined($localStorage.quiz) && ($localStorage.quiz.quiza_done == true) ) {
						scope.quizOver = true;

					}
				};

				scope.reset();
				scope.init();
			}
		}
	});

	