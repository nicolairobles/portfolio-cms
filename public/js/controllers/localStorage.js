'use strict';

/* Controllers */

  // Form controller
app.controller('localStorageCtrl', ['$scope', '$translate', '$localStorage', '$window', '$cookies','$cookieStore', '$interpolate', '$timeout', function($scope,   $translate,   $localStorage,   $window, $cookies, $cookieStore, $interpolate, $timeout) {

	// reset config
	$scope.app = {
		name: 'Ratings Academy',
		version: '1.0.0',
		// for chart colors
		color: {
		  primary: '#7266ba',
		  info:    '#23b7e5',
		  success: '#27c24c',
		  warning: '#fad733',
		  danger:  '#f05050',
		  light:   '#e8eff0',
		  dark:    '#3a3f51',
		  black:   '#1c2b36'
		},
		settings: {
		  themeID: 7,
		  navbarHeaderColor: 'bg-black',
		  navbarCollapseColor: 'bg-black',
		  asideColor: 'bg-white b-r',
		  headerFixed: true,
		  asideFixed: true,
		  asideFolded: false,
		  asideDock: false,
		  container: true
		}, 
		click_history: {
		  media_is_link: true,// 1         
		  media_is_modal_link: false,// 2         
		  video_text_audio_link: false,// 3         
		  video_text_audio_modal_link: false,// 4         
		  is_this_media_link: false,// 5         
		  is_this_media_modal_link: false,// 6         
		  content_and_ads_link: false,// 7         
		  content_and_ads_modal_link: false,// 8         
		  ad_models_link: false,// 9          
		  ad_models_modal_link: false,// 10         
		  linear_vs_dynamic_link: false,// 11         
		  linear_vs_dynamic_modal_link: false,// 12         
		  platforms_link: false,// 13         
		  platforms_modal_link: false,// 14         
		  game_3_link: false,// 15         
		  game_3_modal_link: false,// 16         
		  key_players_link: false,// 17         
		  key_players_modal_link: false,// 18         
		  what_have_we_learned_link: false,// 19         
		  what_have_we_learned_modal_link: false,// 20         
		  where_does_nielsen_come_in_link: false,// 21         
		  where_does_nielsen_come_in_modal_link: false,// 22         
		  what_are_ratings_link: false,// 23         
		  what_are_ratings_modal_link: false,// 24         
		  ratings_reports_link: false,// 25         
		  ratings_reports_modal_link: false,// 26
		  primary_playback_periods_link: false,// 27         
		  primary_playback_periods_modal_link: false,// 28
		  game_4_link: false,// 29         
		  game_4_modal_link: false,// 30
		  how_do_we_get_ratings_link: false,// 31         
		  how_do_we_get_ratings_modal_link: false,// 32
		  panels_link: false,// 33         
		  panels_modal_link: false,// 34
		  tv_panels_link: false,// 35         
		  tv_panels_modal_link: false,// 36
		  audio_panels_link: false,// 37         
		  audio_panels_modal_link: false,// 38
		  mobile_panels_link: false,// 39         
		  mobile_panels_modal_link: false,// 40
		  game_5_link: false,// 41         
		  game_5_modal_link: false,// 42
		  census_data_link: false,// 43         
		  census_data_modal_link: false,// 44
		  privacy_link: false,// 45         
		  privacy_modal_link: false,// 46       
		}
	}

	$scope.tour = {
		tldr_done: false,
		game_ttl_done: false,
		gameA_box_done: false, 
		gameB_box_done: false
	}

	$scope.quiz = {
		quiza_done: false,
		quizb_done: false
	}

	$scope.resetLocalStorage = function() {

	 // save quizzes to local storage
      if ( angular.isDefined($localStorage.quiz) ) {
        $localStorage.quiz = $scope.quiz;
      } 
      // save tour to local storage
      if ( angular.isDefined($localStorage.tour) ) {
        $localStorage.tour = $scope.tour;
      }
      // save click_history to local storage
      if ( angular.isDefined($localStorage.click_history) ) {
        $localStorage.click_history = $scope.app.click_history;
      }
      // save settings to local storage
      if ( angular.isDefined($localStorage.settings) ) {
        $localStorage.settings = $scope.app.settings;
      }
      $scope.$watch('app.settings', function(){
        if( $scope.app.settings.asideDock  &&  $scope.app.settings.asideFixed ){
          // aside dock and fixed must set the header fixed.
          $scope.app.settings.headerFixed = true;
        }
        // for box layout, add background image
        $scope.app.settings.container ? angular.element('html').addClass('bg') : angular.element('html').removeClass('bg');
        // save to local storage
        $localStorage.settings = $scope.app.settings;
      }, true);

      // reload page from server
      location.reload(true);

    };

	$scope.clearCache = function() {

      // reload page from server
      window.location.reload(true);

    };

	// $scope.optOutOfLocalStorage = function() {

	//  // save quizzes to local storage
 //      if ( angular.isDefined($localStorage.quiz) ) {
 //        $localStorage.quiz = $scope.quiz;
 //      } 
 //      $scope.$watch('quiz', function(){
 //        // save to local storage
 //        $localStorage.quiz = $scope.quiz;
 //      }, false);

 //      // save tour to local storage
 //      if ( angular.isDefined($localStorage.tour) ) {
 //        $localStorage.tour = $scope.tour;
 //      }
 //      $scope.$watch('tour', function(){
 //        // save to local storage
 //        $localStorage.tour = $scope.tour;
 //      }, false);

 //      // save click_history to local storage
 //      if ( angular.isDefined($localStorage.click_history) ) {
 //        $localStorage.click_history = $scope.app.click_history;
 //      }
 //      $scope.$watch('app.click_history', function(){
 //        // save to local storage
 //        $localStorage.click_history = $scope.app.click_history;
 //      }, false);


 //      // save settings to local storage
 //      if ( angular.isDefined($localStorage.settings) ) {
 //        $localStorage.settings = $scope.app.settings;
 //      }
 //      $scope.$watch('app.settings', function(){
 //        if( $scope.app.settings.asideDock  &&  $scope.app.settings.asideFixed ){
 //          // aside dock and fixed must set the header fixed.
 //          $scope.app.settings.headerFixed = true;
 //        }
 //        // for box layout, add background image
 //        $scope.app.settings.container ? angular.element('html').addClass('bg') : angular.element('html').removeClass('bg');
 //        // save to local storage
 //        $localStorage.settings = $scope.app.settings;
 //      });

 //    };




	// $scope.optIntoLocalStorage = function() {

 //      // save quizzes to local storage

 //      if ( angular.isDefined($localStorage.quiz) ) {
 //        $scope.quiz = $localStorage.quiz;
 //      } else {
 //        $localStorage.quiz = $scope.quiz;
 //      }
 //      $scope.$watch('quiz', function(){
 //        // save to local storage
 //        $localStorage.quiz = $scope.quiz;
 //      }, true);

 //      // save tour to local storage

 //      if ( angular.isDefined($localStorage.tour) ) {
 //        $scope.tour = $localStorage.tour;
 //      } else {
 //        $localStorage.tour = $scope.tour;
 //      }
 //      $scope.$watch('tour', function(){
 //        // save to local storage
 //        $localStorage.tour = $scope.tour;
 //      }, true);

 //      // save click_history to local storage

 //      if ( angular.isDefined($localStorage.click_history) ) {
 //        $scope.app.click_history = $localStorage.click_history;
 //      } else {
 //        $localStorage.click_history = $scope.app.click_history;
 //      }
 //      $scope.$watch('app.click_history', function(){
 //        // save to local storage
 //        $localStorage.click_history = $scope.app.click_history;
 //      }, true);


 //      // save settings to local storage
 //      if ( angular.isDefined($localStorage.settings) ) {
 //        $scope.app.settings = $localStorage.settings;
 //      } else {
 //        $localStorage.settings = $scope.app.settings;
 //      }
 //      $scope.$watch('app.settings', function(){
 //        if( $scope.app.settings.asideDock  &&  $scope.app.settings.asideFixed ){
 //          // aside dock and fixed must set the header fixed.
 //          $scope.app.settings.headerFixed = true;
 //        }
 //        // for box layout, add background image
 //        $scope.app.settings.container ? angular.element('html').addClass('bg') : angular.element('html').removeClass('bg');
 //        // save to local storage
 //        $localStorage.settings = $scope.app.settings;
 //      }, true);

 //    };


}]);
