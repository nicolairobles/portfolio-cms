app.directive(
    "mAppLoading",
    function( $animate ) {
        // Return the directive configuration.
        return({
            link: link,
            restrict: "C"
        });
        // I bind the JavaScript events to the scope.
        function link( scope, element, attributes ) {
            // Due to the way AngularJS prevents animation during the bootstrap
            // of the application, we can't animate the top-level container; but,
            // since we added "ngAnimateChildren", we can animated the inner
            // container during this phase.
            // --
            // NOTE: Am using .eq(1) so that we don't animate the Style block.
            $animate.leave( element.children().eq( 1 ) ).then(
                function cleanupAfterAnimation() {
                    // Remove the root directive element.
                    element.remove();
                    // Clear the closed-over variable references.
                    scope = element = attributes = null;
                }
            );
        }
    }
);




/*

QUIZ A

*/






app.directive('quiza', function(quizAFactory, $localStorage) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: '../../tpl/module-1/blocks/game.html',
		link: function(scope, elem, attrs) {

			scope.start = function() {
				scope.questionId = 0;
				scope.quizOver = false;
				scope.inProgress = true;

				// starts out true as default, so that it's not undefined
				scope.correctAns = true;
				scope.showChoices = true;
				scope.showExplanation = false;
				scope.showTryAgain = false;

				// number of questions in game
				scope.questions = quizAFactory.getQuestions();
				scope.questionCount = scope.questions.length;

				// create arrays to track answered and notAnswered questions
				scope.answeredQuestions = [];
				scope.notAnsweredQuestions = [];
				for (var i = 0; i < scope.questionCount; i++) {
					// create initial array based on number of questions
					scope.notAnsweredQuestions.push(i)
					console.log("notAnsweredQuestions: " +scope.notAnsweredQuestions)
				}

				// Get first question
				scope.getQuestion();
			};


			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
			}

			scope.getQuestion = function() {
				// current question
				console.log("current question: " + scope.questionId );
				console.log("correctAns: " + scope.correctAns );
				console.log("inProgress: " + scope.inProgress );

				// queries questionFactory for info on the questions
				var q = quizAFactory.getQuestion(scope.questionId);
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

				console.log("option id: "+ id)
				console.log("option value: "+ scope.options[id].value)

				var ans = id;

				if(ans == scope.options[scope.answer].id) {
					scope.score++;
					scope.correctAns = true;
					// increase size of answeredQuestions array
					scope.answeredQuestions.push(scope.questionId);
					console.log("answeredQuestions: " + scope.answeredQuestions)
					// decrease size of notAnsweredQuestions array
					scope.notAnsweredQuestions.pop();
					console.log("notAnsweredQuestions: " + scope.notAnsweredQuestions)

					scope.showExplanation = true;
					scope.showChoices = false;
					scope.showTryAgain = false;

				} else {
					scope.correctAns = false;
					scope.showTryAgain = true;
					setTimeout(function(){
						scope.$apply(function(){
					       console.log("try again disappears")
							scope.showTryAgain = false;
							console.log(scope.showTryAgain)
					     });
					}, 750);
					console.log(scope.showTryAgain)
				}

				scope.answerMode = false;
			};


			scope.nextQuestion = function() {
				scope.questionId++;
				scope.getQuestion();
				scope.showExplanation = false;
				scope.showChoices = true;
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

	// super simple service for quiz questions
	// each function returns a promise object 
	app.factory('quizAFactory', function() {
		var questions = [
			{
				question: "You are watching an episode of The Walking Dead. What type of media is this?",
				options: [{id:0, "value":"Video"},{id:1, "value":"Text" },{id:2, "value":"Audio"}],
				explanation: "An episode of TV is a video.",
				answer: 0
			},
			{
				question: "You’re listening to the episode recap on a podcast. What type of media is this?",
				options: [{id:0, "value":"Video"},{id:1, "value":"Text" },{id:2, "value":"Audio"}],
				explanation: "Podcasts are audio.",
				answer: 2
			},
			{
				question: "You realize you weren’t paying attention to the episode because you were watching cat videos on YouTube. What type of media are cat videos?",
				options: [{id:0, "value":"Video"},{id:1, "value":"Text" },{id:2, "value":"Audio"}],
				explanation: "Cat videos are, well, videos.",
				answer: 0
			},
			{
				question: "You’re reading a review of that episode on the New York Times website. What type of media is this?",
				options: [{id:0, "value":"Video"},{id:1, "value":"Text" },{id:2, "value":"Audio"}],
				explanation: "If you’re reading something, it’s text.",
				answer: 1
			}
		];

		return {
			getQuestion: function(id) {
				if(id < questions.length) {
					return questions[id];
				} else {
					return false;
				}
			},
			getQuestions: function(){
				return questions;
			}
		};
	});






/*

QUIZ B

*/






app.directive('quizb', function(quizBFactory, $localStorage) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: '../../tpl/module-1/blocks/game.html',
		link: function(scope, elem, attrs) {

			scope.start = function() {
				scope.questionId = 0;
				scope.quizOver = false;
				scope.inProgress = true;

				// starts out true as default, so that it's not undefined
				scope.correctAns = true;
				scope.showChoices = true;
				scope.showExplanation = false;
				scope.showTryAgain = false;

				// number of questions in game
				scope.questions = quizBFactory.getQuestions();
				scope.questionCount = scope.questions.length;

				// create arrays to track answered and notAnswered questions
				scope.answeredQuestions = [];
				scope.notAnsweredQuestions = [];
				for (var i = 0; i < scope.questionCount; i++) {
					// create initial array based on number of questions
					scope.notAnsweredQuestions.push(i)
					console.log("notAnsweredQuestions: " +scope.notAnsweredQuestions)
				}

				// Get first question
				scope.getQuestion();
			};


			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
			}

			scope.getQuestion = function() {
				// current question
				console.log("current question: " + scope.questionId );
				console.log("correctAns: " + scope.correctAns );
				console.log("inProgress: " + scope.inProgress );

				// queries questionFactory for info on the questions
				var q = quizBFactory.getQuestion(scope.questionId);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					scope.explanation = q.explanation;
					scope.answerMode = true;
				} else {
					scope.quizOver = true;
					console.log("quizOver: " + scope.quizOver)
					// Set quizb_done to true in localStorage
					$localStorage.quiz.quizb_done = true;
				}
			};

			scope.checkAnswer = function(id) {
				console.log("checking answer")

				console.log("option id: "+ id)
				console.log("option value: "+ scope.options[id].value)

				var ans = id;

				if(ans == scope.options[scope.answer].id) {
					scope.score++;
					scope.correctAns = true;
					// increase size of answeredQuestions array
					scope.answeredQuestions.push(scope.questionId);
					console.log("answeredQuestions: " + scope.answeredQuestions)
					// decrease size of notAnsweredQuestions array
					scope.notAnsweredQuestions.pop();
					console.log("notAnsweredQuestions: " + scope.notAnsweredQuestions)

					scope.showExplanation = true;
					scope.showChoices = false;
					scope.showTryAgain = false;

				} else {
					scope.correctAns = false;
					scope.showTryAgain = true;
					setTimeout(function(){
						scope.$apply(function(){
					       console.log("try again disappears")
							scope.showTryAgain = false;
							console.log(scope.showTryAgain)
					     });
					}, 750);
					console.log(scope.showTryAgain)
				}

				scope.answerMode = false;
			};


			scope.nextQuestion = function() {
				scope.questionId++;
				scope.getQuestion();
				scope.showExplanation = false;
				scope.showChoices = true;
			}

			scope.init = function() {
				console.log("init function");
      			// if quiz hasn't been played before, launch it immediately 
	      		if ( angular.isDefined($localStorage.quiz) && ($localStorage.quiz.quizb_done == false) ) {
				  	console.log("$localstorage.quizb_done: "+ $localStorage.quiz.quizb_done);
	      			scope.start();
				  	console.log("quiz initialized");
				}
				// if quiz has already been played, launch "Congrats" page with reset option 
				else if ( angular.isDefined($localStorage.quiz) && ($localStorage.quiz.quizb_done == true) ) {
					scope.quizOver = true;

				}
			};

			scope.reset();
			scope.init();
		}
	}
});

	// super simple service for quiz questions
	// each function returns a promise object 
	app.factory('quizBFactory', function() {
		var questions = [
			{
				question: "You’re watching an episode of American Horror Story live, and you see the same commercials that everyone else does.",
				options: [{id:0, "value":"Linear"},{id:1, "value":"Dynamic" }],
				explanation: "When watching a show live and everyone is seeing the same commercial you are, you are watching a linear ad.",
				answer: 0
			},
			{
				question: "You’re watching the episode on your laptop, it aired two weeks ago, and you see a toothpaste ad for your favorite brand.",
				options: [{id:0, "value":"Linear"},{id:1, "value":"Dynamic" }],
				explanation: "When catching up on an older program and you see a different ad than everyone else, you are watching a dynamic ad.",
				answer: 1
			},
			{
				question: "You’re watching the episode on your tablet, and it has the same commercials as the live TV airing that aired the night before.",
				options: [{id:0, "value":"Linear"},{id:1, "value":"Dynamic" }],
				explanation: "When watching a show and you see the same ads as everyone else, you are watching a linear ad.",
				answer: 0
			},
			{
				question: "You’re commuting to work and hear the same ad in your car as the person in the car next to you hears.",
				options: [{id:0, "value":"Linear"},{id:1, "value":"Dynamic" }],
				explanation: "When listening to a radio station live and everyone is hearing the same commercial you are, you are hearing a linear ad.",
				answer: 0
			},
			{
				question: "You’re streaming music using the same app as your roommate and hear a different ad than your roommate does.",
				options: [{id:0, "value":"Linear"},{id:1, "value":"Dynamic" }],
				explanation: "When streaming music on demand and you hear a different ad than your roommate, you are hearing a dynamic ad.",
				answer: 1
			}
		];

		return {
			getQuestion: function(id) {
				if(id < questions.length) {
					return questions[id];
				} else {
					return false;
				}
			},
			getQuestions: function(){
				return questions;
			}
		};
	});






/*

QUIZ C

*/






app.directive('quizc', function(quizCFactory, $localStorage) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: '../../tpl/module-1/blocks/game.html',
		link: function(scope, elem, attrs) {

			scope.start = function() {
				scope.questionId = 0;
				scope.quizOver = false;
				scope.inProgress = true;

				// starts out true as default, so that it's not undefined
				scope.correctAns = true;
				scope.showChoices = true;
				scope.showExplanation = false;
				scope.showTryAgain = false;

				// number of questions in game
				scope.questions = quizCFactory.getQuestions();
				scope.questionCount = scope.questions.length;

				// create arrays to track answered and notAnswered questions
				scope.answeredQuestions = [];
				scope.notAnsweredQuestions = [];
				for (var i = 0; i < scope.questionCount; i++) {
					// create initial array based on number of questions
					scope.notAnsweredQuestions.push(i)
					console.log("notAnsweredQuestions: " +scope.notAnsweredQuestions)
				}

				// Get first question
				scope.getQuestion();
			};


			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
			}

			scope.getQuestion = function() {
				// current question
				console.log("current question: " + scope.questionId );
				console.log("correctAns: " + scope.correctAns );
				console.log("inProgress: " + scope.inProgress );

				// queries questionFactory for info on the questions
				var q = quizCFactory.getQuestion(scope.questionId);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					scope.explanation = q.explanation;
					scope.answerMode = true;
				} else {
					scope.quizOver = true;
					console.log("quizOver: " + scope.quizOver)
					// Set quizc_done to true in localStorage
					$localStorage.quiz.quizc_done = true;
				}
			};

			scope.checkAnswer = function(id) {
				console.log("checking answer")

				console.log("option id: "+ id)
				console.log("option value: "+ scope.options[id].value)

				var ans = id;

				if(ans == scope.options[scope.answer].id) {
					scope.score++;
					scope.correctAns = true;
					// increase size of answeredQuestions array
					scope.answeredQuestions.push(scope.questionId);
					console.log("answeredQuestions: " + scope.answeredQuestions)
					// decrease size of notAnsweredQuestions array
					scope.notAnsweredQuestions.pop();
					console.log("notAnsweredQuestions: " + scope.notAnsweredQuestions)

					scope.showExplanation = true;
					scope.showChoices = false;
					scope.showTryAgain = false;

				} else {
					scope.correctAns = false;
					scope.showTryAgain = true;
					setTimeout(function(){
						scope.$apply(function(){
					       console.log("try again disappears")
							scope.showTryAgain = false;
							console.log(scope.showTryAgain)
					     });
					}, 750);
					console.log(scope.showTryAgain)
				}

				scope.answerMode = false;
			};


			scope.nextQuestion = function() {
				scope.questionId++;
				scope.getQuestion();
				scope.showExplanation = false;
				scope.showChoices = true;
			}

			scope.init = function() {
				console.log("init function");
      			// if quiz hasn't been played before, launch it immediately 
	      		if ( angular.isDefined($localStorage.quiz) && ($localStorage.quiz.quizc_done == false) ) {
				  	console.log("$localstorage.quizc_done: "+ $localStorage.quiz.quizc_done);
	      			scope.start();
				  	console.log("quiz initialized");
				}
				// if quiz has already been played, launch "Congrats" page with reset option 
				else if ( angular.isDefined($localStorage.quiz) && ($localStorage.quiz.quizc_done == true) ) {
					scope.quizOver = true;

				}
			};

			scope.reset();
			scope.init();
		}
	}
});

	// super simple service for quiz questions
	// each function returns a promise object 
	app.factory('quizCFactory', function() {
		var questions = [
			{
				question: "What kind of a device is a Roku?",
				options: [{id:0, "value":"Digital Device"},{id:1, "value":"Audio" },{id:2, "value":"Connected Device" }, {id:3, "value":"Television" }],
				explanation: "Roku is a connected device.",
				answer: 2
			},
			{
				question: "I advise my clients on how much money to spend on TV and online advertising. Where do I work?",
				options: [{id:0, "value":"Advertiser"},{id:1, "value":"Agency" }],
				explanation: "Agencies advise clients on how much to spend on TV and online advertising.",
				answer: 1
			},
			{
				question: "AND, which one of these am I considered?",
				options: [{id:0, "value":"Media Buyer"},{id:1, "value":"Media Seller" }],
				explanation: "Media buyers help clients by purchasing advertising.",
				answer: 0
			},
			{
				question: "I own a number of sites and apps to distribute my own content on. Where do I work?",
				options: [{id:0, "value":"TV Network"},{id:1, "value":"Digital Publisher" }, {id:2, "value":"Radio Broadcaster" },{id:3, "value":"Ad Network/Platform" } ,{id:4, "value":"Multichannel Video Programming Distributor (MVPD)" }],
				explanation: "Digital publishers distribute their own content to sites and apps they own and operate.",
				answer: 1
			},
			{
				question: "AND, which one of these am I considered?",
				options: [{id:0, "value":"Media Buyer"},{id:1, "value":"Media Seller" }],
				explanation: "Media sellers sell advertising space on their sites and apps to clients.",
				answer: 1
			}
		];

		return {
			getQuestion: function(id) {
				if(id < questions.length) {
					return questions[id];
				} else {
					return false;
				}
			},
			getQuestions: function(){
				return questions;
			}
		};
	});





/*

QUIZ D

*/






app.directive('quizd', function(quizDFactory, $localStorage) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: '../../tpl/module-1/blocks/game.html',
		link: function(scope, elem, attrs) {

			scope.start = function() {
				scope.questionId = 0;
				scope.quizOver = false;
				scope.inProgress = true;

				// starts out true as default, so that it's not undefined
				scope.correctAns = true;
				scope.showChoices = true;
				scope.showExplanation = false;
				scope.showTryAgain = false;

				// number of questions in game
				scope.questions = quizDFactory.getQuestions();
				scope.questionCount = scope.questions.length;

				// create arrays to track answered and notAnswered questions
				scope.answeredQuestions = [];
				scope.notAnsweredQuestions = [];
				for (var i = 0; i < scope.questionCount; i++) {
					// create initial array based on number of questions
					scope.notAnsweredQuestions.push(i)
					console.log("notAnsweredQuestions: " +scope.notAnsweredQuestions)
				}

				// Get first question
				scope.getQuestion();
			};


			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
			}

			scope.getQuestion = function() {
				// current question
				console.log("current question: " + scope.questionId );
				console.log("correctAns: " + scope.correctAns );
				console.log("inProgress: " + scope.inProgress );

				// queries questionFactory for info on the questions
				var q = quizDFactory.getQuestion(scope.questionId);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					scope.explanation = q.explanation;
					scope.answerMode = true;
				} else {
					scope.quizOver = true;
					console.log("quizOver: " + scope.quizOver)
					// Set quizd_done to true in localStorage
					$localStorage.quiz.quizd_done = true;
				}
			};

			scope.checkAnswer = function(id) {
				console.log("checking answer")

				console.log("option id: "+ id)
				console.log("option value: "+ scope.options[id].value)

				var ans = id;

				if(ans == scope.options[scope.answer].id) {
					scope.score++;
					scope.correctAns = true;
					// increase size of answeredQuestions array
					scope.answeredQuestions.push(scope.questionId);
					console.log("answeredQuestions: " + scope.answeredQuestions)
					// decrease size of notAnsweredQuestions array
					scope.notAnsweredQuestions.pop();
					console.log("notAnsweredQuestions: " + scope.notAnsweredQuestions)

					scope.showExplanation = true;
					scope.showChoices = false;
					scope.showTryAgain = false;

				} else {
					scope.correctAns = false;
					scope.showTryAgain = true;
					setTimeout(function(){
						scope.$apply(function(){
					       console.log("try again disappears")
							scope.showTryAgain = false;
							console.log(scope.showTryAgain)
					     });
					}, 750);
					console.log(scope.showTryAgain)
				}

				scope.answerMode = false;
			};


			scope.nextQuestion = function() {
				scope.questionId++;
				scope.getQuestion();
				scope.showExplanation = false;
				scope.showChoices = true;
			}

			scope.init = function() {
				console.log("init function");
      			// if quiz hasn't been played before, launch it immediately 
	      		if ( angular.isDefined($localStorage.quiz) && ($localStorage.quiz.quizd_done == false) ) {
				  	console.log("$localstorage.quizd_done: "+ $localStorage.quiz.quizd_done);
	      			scope.start();
				  	console.log("quiz initialized");
				}
				// if quiz has already been played, launch "Congrats" page with reset option 
				else if ( angular.isDefined($localStorage.quiz) && ($localStorage.quiz.quizd_done == true) ) {
					scope.quizOver = true;

				}
			};

			scope.reset();
			scope.init();
		}
	}
});

	// super simple service for quiz questions
	// each function returns a promise object 
	app.factory('quizDFactory', function() {
		var questions = [
			{
				question: "Which of these do ratings not cover?",
				options: [{id:0, "value":"How Many"},{id:1, "value":"How Long" },{id:2, "value":"How Loud" }, {id:3, "value":"How Often" }],
				explanation: "Ratings do not account for how loud content is.",
				answer: 2
			},
			{
				question: "You watch The Big Bang Theory season finale the day and time it airs. Which Primary Playback Period does it fall into?",
				options: [{id:0, "value":"Live"},{id:1, "value":"Live + Same Day" },{id:2, "value":"Live + 3" },{id:3, "value":"Live + 7" },{id:4, "value":"Live + X Days" }],
				explanation: "Watching a program live means that you are watching it as it is broadcast.",
				answer: 0
			},
			{
				question: "You watch The Big Bang Theory season finale 20 days after the premier. Which Primary Playback Period does it fall into?",
				options: [{id:0, "value":"Live"},{id:1, "value":"Live + Same Day" },{id:2, "value":"Live + 3" },{id:3, "value":"Live + 7" },{id:4, "value":"Live + X Days" }],
				explanation: "Watching a program 20 days after it airs falls into the Live + X Days playback period.",
				answer: 4
			},
			{
				question: "You watch The Big Bang Theory season finale the day it airs, two hours late. Which Primary Playback Period does it fall into?",
				options: [{id:0, "value":"Live"},{id:1, "value":"Live + Same Day" },{id:2, "value":"Live + 3" },{id:3, "value":"Live + 7" },{id:4, "value":"Live + X Days" }],
				explanation: "Watching a program two hours after it airs falls into the Live + Same Day playback period.",
				answer: 1
			},
			{
				question: "You watch The Big Bang Theory season finale on your tablet, 7 days after it airs. Which Primary Playback Period does it fall into?",
				options: [{id:0, "value":"Live"},{id:1, "value":"Live + Same Day" },{id:2, "value":"Live + 3" },{id:3, "value":"Live + 7" },{id:4, "value":"Live + X Days" }],
				explanation: "Watching a program seven days after it airs falls into the Live + 7 playback period.",
				answer: 3
			}
		];

		return {
			getQuestion: function(id) {
				if(id < questions.length) {
					return questions[id];
				} else {
					return false;
				}
			},
			getQuestions: function(){
				return questions;
			}
		};
	});







/*

QUIZ E

*/






app.directive('quize', function(quizEFactory, $localStorage) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: '../../tpl/module-1/blocks/game.html',
		link: function(scope, elem, attrs) {

			scope.start = function() {
				scope.questionId = 0;
				scope.quizOver = false;
				scope.inProgress = true;

				// starts out true as default, so that it's not undefined
				scope.correctAns = true;
				scope.showChoices = true;
				scope.showExplanation = false;
				scope.showTryAgain = false;

				// number of questions in game
				scope.questions = quizEFactory.getQuestions();
				scope.questionCount = scope.questions.length;

				// create arrays to track answered and notAnswered questions
				scope.answeredQuestions = [];
				scope.notAnsweredQuestions = [];
				for (var i = 0; i < scope.questionCount; i++) {
					// create initial array based on number of questions
					scope.notAnsweredQuestions.push(i)
					console.log("notAnsweredQuestions: " +scope.notAnsweredQuestions)
				}

				// Get first question
				scope.getQuestion();
			};


			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
			}

			scope.getQuestion = function() {
				// current question
				console.log("current question: " + scope.questionId );
				console.log("correctAns: " + scope.correctAns );
				console.log("inProgress: " + scope.inProgress );

				// queries questionFactory for info on the questions
				var q = quizEFactory.getQuestion(scope.questionId);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					scope.explanation = q.explanation;
					scope.answerMode = true;
				} else {
					scope.quizOver = true;
					console.log("quizOver: " + scope.quizOver)
					// Set quize_done to true in localStorage
					$localStorage.quiz.quize_done = true;
				}
			};

			scope.checkAnswer = function(id) {
				console.log("checking answer")

				console.log("option id: "+ id)
				console.log("option value: "+ scope.options[id].value)

				var ans = id;

				if(ans == scope.options[scope.answer].id) {
					scope.score++;
					scope.correctAns = true;
					// increase size of answeredQuestions array
					scope.answeredQuestions.push(scope.questionId);
					console.log("answeredQuestions: " + scope.answeredQuestions)
					// decrease size of notAnsweredQuestions array
					scope.notAnsweredQuestions.pop();
					console.log("notAnsweredQuestions: " + scope.notAnsweredQuestions)

					scope.showExplanation = true;
					scope.showChoices = false;
					scope.showTryAgain = false;

				} else {
					scope.correctAns = false;
					scope.showTryAgain = true;
					setTimeout(function(){
						scope.$apply(function(){
					       console.log("try again disappears")
							scope.showTryAgain = false;
							console.log(scope.showTryAgain)
					     });
					}, 750);
					console.log(scope.showTryAgain)
				}

				scope.answerMode = false;
			};


			scope.nextQuestion = function() {
				scope.questionId++;
				scope.getQuestion();
				scope.showExplanation = false;
				scope.showChoices = true;
			}

			scope.init = function() {
				console.log("init function");
      			// if quiz hasn't been played before, launch it immediately 
	      		if ( angular.isDefined($localStorage.quiz) && ($localStorage.quiz.quize_done == false) ) {
				  	console.log("$localstorage.quize_done: "+ $localStorage.quiz.quize_done);
	      			scope.start();
				  	console.log("quiz initialized");
				}
				// if quiz has already been played, launch "Congrats" page with reset option 
				else if ( angular.isDefined($localStorage.quiz) && ($localStorage.quiz.quize_done == true) ) {
					scope.quizOver = true;

				}
			};

			scope.reset();
			scope.init();
		}
	}
});

	// super simple service for quiz questions
	// each function returns a promise object 
	app.factory('quizEFactory', function() {
		var questions = [
			{
				question: "Which Panels don’t use watermarks in any measurement method?",
				options: [{id:0, "value":"TV Panels"},{id:1, "value":"Digital Panels" },{id:2, "value":"Audio Panels" }],
				explanation: "Digital Panels do not use watermarks.",
				answer: 1
			},
			{
				question: "Which Panels use only Portable People Meters and Diaries?",
				options: [{id:0, "value":"TV Panels"},{id:1, "value":"Digital Panels" },{id:2, "value":"Audio Panels" }],
				explanation: "Audio Panels use only Portable People Meters and Diaries.",
				answer: 2
			},
			{
				question: "Which Panels use People Meters, Set Meters, Code Readers, and Diaries?",
				options: [{id:0, "value":"TV Panels"},{id:1, "value":"Digital Panels" },{id:2, "value":"Audio Panels" }],
				explanation: "T.V. Panels use People Meters, Set Meters, Code Readers, and Diaries.",
				answer: 0
			},
			{
				question: "Which Panels use Online Meters and Mobile Meters?",
				options: [{id:0, "value":"TV Panels"},{id:1, "value":"Digital Panels" },{id:2, "value":"Audio Panels" }],
				explanation: "Digital Panels use Online Meters and Mobile Meters.",
				answer: 1
			}
		];

		return {
			getQuestion: function(id) {
				if(id < questions.length) {
					return questions[id];
				} else {
					return false;
				}
			},
			getQuestions: function(){
				return questions;
			}
		};
	});









/*

TEST - TABS DIRECTIVE FOR SELECTIVE HIGHLIGHTING

*/






app.directive('selectivehighlighting', function(Tabs, $localStorage) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: '../../tpl/module-1/blocks/selectiveHighlighting.html',
		link: function(scope, elem, attrs) {
			
			scope.getClass = function() {
				var tab = Tabs.getTab(scope.questionId);
				if(tab) {
					scope.tab = tab.question;
					scope.content = tab.options;
					scope.title = tab.title;
					scope.img = tab.img;
				} else {
					scope.quizOver = true;
					console.log("quizOver: " + scope.quizOver)
					// Set quize_done to true in localStorage
					$localStorage.quiz.quize_done = true;
				}
			}


		}
	}
});

	// super simple service for quiz questions
	// each function returns a promise object 
	app.factory('Tabs', function() {
		var tabs = $scope.tabs = [
	      // tab 1
	       {title: 'Cross- Platform Homes Panel', 
	        content: ["The Cross-Platform homes panel is a subset of the National People Meter Panel, meaning panelists are recruited to be a part of both panels. Along with the People Meter that is installed on a panelist’s TV, an online meter is installed on the panelist’s computer. This allows Nielsen to understand what panelists viewed on TV, what they viewed online, and what they viewed on both platforms. This pivotal information allows Nielsen to de-duplicate audiences, or know how many people say a piece of content or ad on both platforms.","Where is this used?","All markets: This panel is a subset of our National People Meter Panel","How do we know what is being watched?","Online Meter for online activity: People Meters are used to measure TV activity","How do we know who is watching?","Panelist logs in each time the he/she turns on his/her computer or TV"],
	        img: 'cross-platform-homes-panel.svg' },
	        // tab 2
	        {title: 'Online Panel', 
	        content: ["Measures online activity on computers","Where is this used?","All markets","How do we know what is being watched?","Online Meter","How do we know who is watching?","Panelist logs In each time he/she turns on his/her computer"],
	        img: 'online-platform-icon.svg' },
	        // tab 
	        {title: 'Mobile Panel', 
	        content: ["Measures mobile activity on smartphones and tablets","Where is this used?","All markets","How do we know what is being watched?","Mobile Meter","How do we know who is watching?","Assume registered panelists is the sole user"],
	        img: 'mobile-panel-icon.svg' }
	    ];

		return {
			getTab: function(id) {
				if(id < tabs.length) {
					return tabs[id];
				} else {
					return false;
				}
			},
			getTabs: function(){
				return tabs;
			}
		};
	});