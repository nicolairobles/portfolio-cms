'use strict';

/* Controllers */

angular.module('app')
  .controller('AppCtrl', ['$rootScope','$scope', '$translate', '$localStorage', '$window', '$cookies','$cookieStore', '$interpolate', '$timeout',
    function( $rootScope, $scope,   $translate,   $localStorage,   $window, $cookies,$cookieStore, $interpolate, $timeout) {
      // add 'ie' classes to html
      var isIE = !!navigator.userAgent.match(/MSIE/i);
      if(isIE){ angular.element($window.document.body).addClass('ie');}
      if(isSmartDevice( $window ) ){ angular.element($window.document.body).addClass('smart')};


      // config
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
        }
      }

      // instantiate vars to hold default variables
      var settings_default, 
          click_history_default, 
          tour_default, 
          quiz_default;


      $scope.tour = tour_default = {
        tldr_done: false,
        game_ttl_done: false,
        gameA_box_done: false, 
        gameB_box_done: false,
        gameC_box_done: false,
        gameD_box_done: false,
        gameE_box_done: false
      }

      $scope.quiz = quiz_default = {
        quiza_done: false,
        quizb_done: false,
        quizc_done: false,
        quizd_done: false,
        quize_done: false
      }

      $scope.app.settings = settings_default = {
        themeID: 7,
        navbarHeaderColor: 'bg-black',
        navbarCollapseColor: 'bg-black',
        asideColor: 'bg-white b-r',
        headerFixed: true,
        asideFixed: true,
        asideFolded: false,
        asideDock: false,
        container: true
      }

      $scope.app.click_history = click_history_default = {
        // Section 1
        media_is_link: true,        
        media_is_modal_link: false,  

        video_text_audio_link: false,        
        video_text_audio_modal_link: false, 

        is_this_media_link: false,        
        is_this_media_modal_link: false,  

        content_and_ads_link: false,        
        content_and_ads_modal_link: false,    

        ad_models_link: false,         
        ad_models_modal_link: false,   

        linear_vs_dynamic_link: false,         
        linear_vs_dynamic_modal_link: false,   

        platforms_link: false,         
        platforms_modal_link: false,   

        game_3_link: false,   
        platforms_and_key_players_link: false,      
        game_3_modal_link: false,   

        key_players_link: false,         
        key_players_modal_link: false,    

        what_have_we_learned_link: false,         
        what_have_we_learned_modal_link: false,  

        // Section 2
        where_does_nielsen_come_in_link: false,         
        where_does_nielsen_come_in_modal_link: false,   

        what_are_ratings_link: false,         
        what_are_ratings_modal_link: false, 

        ratings_reports_link: false,         
        ratings_reports_modal_link: false,
        
        primary_playback_periods_link: false,         
        primary_playback_periods_modal_link: false,
        
        game_4_link: false,  
        ratings_game_link: false,       
        game_4_modal_link: false,
        
        how_do_we_get_ratings_link: false,         
        how_do_we_get_ratings_modal_link: false,
        
        panels_link: false,         
        panels_modal_link: false,
        
        tv_panels_link: false,         
        tv_panels_modal_link: false,

        tv_panels_overview_link: false,
        tv_panels_methods_link: false,
        tv_panels_panels_link: false,

        digital_panels_overview_link: false,
        digital_panels_methods_link: false,
        digital_panels_panels_link: false,

        audio_panels_overview_link: false,
        audio_panels_methods_link: false,
        audio_panels_panels_link: false,

        audio_panels_link: false,         
        audio_panels_modal_link: false,
        
        mobile_panels_link: false,         
        mobile_panels_modal_link: false,
        
        game_5_link: false, 
        panels_game_link: false,        
        game_5_modal_link: false,
        
        census_data_link: false,         
        census_data_modal_link: false,
        
        privacy_link: false,         
        privacy_modal_link: false,       
      }

      $scope.resetLocalStorage = function() {
          console.log("resetLocalStorage function activated")
          // save quizzes to local storage
          if ( angular.isDefined($localStorage.quiz) ) {
            $localStorage.quiz = quiz_default;
          } 
          // save tour to local storage
          if ( angular.isDefined($localStorage.tour) ) {
            $localStorage.tour = tour_default;
          }
          // save click_history to local storage
          if ( angular.isDefined($localStorage.click_history) ) {
            $localStorage.click_history = click_history_default;
          }
          // save settings to local storage
          if ( angular.isDefined($localStorage.settings) ) {
            $localStorage.settings = settings_default;
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
          // location.reload(true);
      };


      $scope.clearCache = function() {

        // reload page from server
        window.location.reload(true);

      };




      // Homepage Functions
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

      // var navBarLinksArray = [];
      // for (var key in $scope.app.click_history){
      //   navBarLinksArray.push(key)
      // }
      // console.log("created navBarLinksArray: " + navBarLinksArray)


      // $scope.link_clicked = false;
      // $scope.addLinkClickedClass = function(navBarLinksArrayIndex){
      //     console.log("addLinkClickedClass triggered")
      //     // $scope.link_clicked = true;
      //     var className = "." + navBarLinksArrayIndex;
      //     console.log("className: " + className)
      //     angular.element(className).addClass('link-clicked')
      //     // $scope.linkClickedClass = "link-clicked";
      //     // $scope.app.click_history[link_name] = 'true';
      //     // console.log("link_name: boolean " + link_name + ", " + $scope.app.click_history[link_name]);

      // }

      // var addLinkClickedClass = function(navBarLinksArray){
      //   console.log("created navBarLinksArray and entered funtion to add link-clicked class")

      //   for (var i = 0; i < navBarLinksArray.length; i++) {

      //     var localStorage_link_name = navBarLinksArray[i];

      //     // create jquery variable
      //     var jquery_link_name = $("."+localStorage_link_name)

      //     // check localStorage, add class if true
      //     console.log("localStorage boolean: " + localStorage_link_name)
      //     console.log("$localStorage boolean: " + $localStorage.click_history[localStorage_link_name])

      //     if ( $localStorage.click_history[localStorage_link_name]=="true" ) {
      //       angular.element( document.querySelector( '.'+localStorage_link_name)).addClass("link-clicked");
      //       jquery_link_name.addClass("link-clicked");
      //       console.log(jquery_link_name + " is " + $localStorage.click_history[localStorage_link_name])
      //     }

      //     // 
      //     $(".big_data_link").on("click", function(){
      //       $(".big_data_link").addClass("link-clicked");
      //       console.log("jquery_link_name clicked on"+jquery_link_name)
      //     });

      //   }
      // };


      // nav bar links-clicked styling functionality



      // var init = function(){
      //   for (var i = 0; i < navBarLinksArray.length; i++) {

      //     var localStorage_link_name = navBarLinksArray[i];

      //     // check localStorage, add class if true
      //     // console.log("localStorage boolean: " + localStorage_link_name)
      //     // console.log("$localStorage boolean: " + $localStorage.click_history[localStorage_link_name])

      //     if ( $localStorage.click_history[localStorage_link_name]=="true" ) {
      //       var className = "."+localStorage_link_name 

      //       angular.element(document).ready(function () {
      //         angular.element(className)
      //         angular.element(className).addClass("link-clicked");
      //           // console.log('page loading completed');
      //       });
      //       // jquery_link_name.addClass("link-clicked");
      //       // console.log(jquery_link_name + " is " + $localStorage.click_history[localStorage_link_name])
      //     }
      //   }
      // }

      // init();


      // save quizzes to local storage

      if ( angular.isDefined($localStorage.quiz) ) {
        $scope.quiz = $localStorage.quiz;
      } else {
        $localStorage.quiz = $scope.quiz;
      }
      $scope.$watch('quiz', function(){
        // save to local storage
        $localStorage.quiz = $scope.quiz;
      }, true);

      // save tour to local storage

      if ( angular.isDefined($localStorage.tour) ) {
        $scope.tour = $localStorage.tour;
      } else {
        $localStorage.tour = $scope.tour;
      }
      $scope.$watch('tour', function(){
        // save to local storage
        $localStorage.tour = $scope.tour;
      }, true);

      // save click_history to local storage

      if ( angular.isDefined($localStorage.click_history) ) {
        $scope.app.click_history = $localStorage.click_history;
      } else {
        $localStorage.click_history = $scope.app.click_history;
      }
      $scope.$watch('app.click_history', function(){
        // save to local storage
        $localStorage.click_history = $scope.app.click_history;
      }, true);


      // save settings to local storage
      if ( angular.isDefined($localStorage.settings) ) {
        $scope.app.settings = $localStorage.settings;
      } else {
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


      // angular translate
      $scope.lang = { isopen: false };
      $scope.langs = {en:'English', de_DE:'German', it_IT:'Italian'};
      $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
      $scope.setLang = function(langKey, $event) {
        // set the current lang
        $scope.selectLang = $scope.langs[langKey];
        // You can change the language during runtime
        $translate.use(langKey);
        $scope.lang.isopen = !$scope.lang.isopen;
      };

      function isSmartDevice( $window ){
          // Adapted from http://www.detectmobilebrowsers.com
          var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
          // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
          return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      }





  }]);
