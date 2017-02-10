'use strict';

/* Controllers */

  // homepage controller
app.controller('HomepageCtrl', ['$scope', '$http', '$state', '$timeout', function($scope, $http, $state, $timeout) {

	// variables
	$scope.guest = false;

	$scope.continueAsGuest = function(){
		$scope.guest = !$scope.guest;
		$scope.signup = false;
		$scope.login = false;
		setTimeout(function(){ 
			$('html, body').animate({
				scrollTop: $("#homepage-modules-container").offset().top
   			}, 1000);
		}, 10);
	};

	$scope.signUp = function(){
		$scope.signup = !$scope.signup;
		$scope.guest = false;
		$scope.login = false;
		setTimeout(function(){ 
			$('html, body').animate({
				scrollTop: $("#signup-container").offset().top
   			}, 1000);
		}, 10);
	};

	$scope.logIn = function(){
		$scope.login = !$scope.login;
		$scope.guest = false;
		$scope.signup = false;
		setTimeout(function(){ 
			$('html, body').animate({
				scrollTop: $("#login-container").offset().top
   			}, 1000);
		}, 10);
	};

  }])
;




  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login
      $http.post('api/login', {email: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        if ( !response.data.user ) {
          $scope.authError = 'Email or Password not right';
        }else{
          $state.go('app.dashboard-v1');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])
;

// signup controller
app.controller('SignupFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.signup = function() {
      $scope.authError = null;
      // Try to create
      $http.post('api/signup', {name: $scope.user.name, email: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        if ( !response.data.user ) {
          $scope.authError = response;
        }else{
          $state.go('app.dashboard-v1');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])
 ;