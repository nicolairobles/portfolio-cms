'use strict';

  // nzTour controllers
  app.controller('tldrTourCtrl', function ($localStorage, $scope, $q, nzTour, $timeout) {

      // // tour steps
      // var tour = window.tour = {
      //   config: {
      //     disableInteraction: true,
      //     mask: {
      //       scrollThrough: false // Allows the user to scroll the scrollbox or window through the mask
      //     },
      //       //dark: true,
      //   },
      //   steps: [{
      //       target: '.tldr',
      //       content: "TL;DR stands for \"Too Long Didn't Read\".<br><br>Click that button for an abridged version.",
      //       before: function(direction){
      //         var d = $q.defer();
      //         // Do some more cool stuff
      //         setTimeout(function(){ 
      //           window.scrollBy(0,1);
      //           console.log("init mask fix");
      //         }, 100);
      //         d.resolve(); // or d.reject()
      //         return d.promise
      //       }

      //   }]
      // };

      // // functions
      // $scope.start = function() {
      //   nzTour.start(tour);
      // };

      // // initiate tour:
      // // if variable exists in localStorage && is false
      // if (angular.isDefined($localStorage.tour) && ($localStorage.tour.tldr_done == false) ) {
      //   // initiate tour, then set to true so it never repeats
      //     $timeout($scope.start);
      //     $localStorage.tour.tldr_done = true;
      // } 

  });


    app.controller('gameATourCtrl', function ($localStorage, $scope, $q, nzTour, $timeout, $interpolate) {

      // functions
      $scope.start = function() {
        nzTour.start(tour);
      };

      // If the game_title has not been shown yet, show it followed by the game_box
      if (angular.isDefined($localStorage.tour) && ($localStorage.tour.game_ttl_done == false) ){
        // tour steps
        var tour = window.tour = {
          config: {
            disableInteraction: true,
            mask: {
              scrollThrough: false // Allows the user to scroll the scrollbox or window through the mask
            },
              //dark: true,
          },
          steps: [{
              target: '.is_this_media_link',
              content: "Starred sections have games.",
              before: function(direction){
                var d = $q.defer();
                // fix button spacing
                $("nz-tour #nzTour-actions").css("bottom", "7.5em");
                // fix mask 
                setTimeout(function(){ 
                  window.scrollBy(0,1);
                  console.log("init mask fix");
                }, 100);


                d.resolve(); // or d.reject()
                return d.promise
              },
          },
          {
              target: '.game_box',
              content: "This one is a fun quiz.",
              before: function(direction){
                var d = $q.defer();
                // Do some more cool stuff
                window.scrollBy(0,1);
                console.log("init mask fix")
                d.resolve(); // or d.reject()
                return d.promise
              }
          }]
        };
        // initiate appropriate tour once page is loaded to ensure appropriate rendering
        $timeout($scope.start);
        // switch appropriate variables to true now that they've been shown
        $localStorage.tour.game_ttl_done = true;
        $localStorage.tour.game_box_done = true;
      } 
      // If the game_title has already been shown, only show the game_box
      else if (angular.isDefined($localStorage.tour) && ($localStorage.tour.game_ttl_done == true) && ($localStorage.tour.gameA_box_done == false) ) {
        // tour steps
        var tour = window.tour = {
          config: {
              //dark: true,
          },
          steps: [
          {
              target: '.game_box',
              content: "This one is a fun quiz."
          }]
        };

        // initiate appropriate tour once page is loaded to ensure appropriate rendering
        $timeout($scope.start);
        // switch appropriate variables to true now that they've been shown
        $localStorage.tour.gameA_box_done = true;
      }

  });



    app.controller('gameBTourCtrl', function ($localStorage, $scope, $q, nzTour, $timeout, $interpolate) {

      // functions
      $scope.start = function() {
        nzTour.start(tour);
      };

            // If the game_title has not been shown yet, show it followed by the game_box
      if (angular.isDefined($localStorage.tour) && ($localStorage.tour.game_ttl_done == false) ){
        // tour steps
        var tour = window.tour = {
          config: {
            disableInteraction: true,
            mask: {
              scrollThrough: false // Allows the user to scroll the scrollbox or window through the mask
            },
              //dark: true,
          },
          steps: [{
              target: '.linear_vs_dynamic_link',
              content: "Starred sections have games.",
              before: function(direction){
                var d = $q.defer();
                // fix button spacing
                $("nz-tour #nzTour-actions").css("bottom", "7.5em");
                // fix mask 
                setTimeout(function(){ 
                  window.scrollBy(0,1);
                  console.log("init mask fix");
                }, 100);


                d.resolve(); // or d.reject()
                return d.promise
              },
          },
          {
              target: '.game_box',
              content: "This one is a fun quiz.",
              before: function(direction){
                var d = $q.defer();
                // Do some more cool stuff
                window.scrollBy(0,1);
                console.log("init mask fix")
                d.resolve(); // or d.reject()
                return d.promise
              }
          }]
        };
        // initiate appropriate tour once page is loaded to ensure appropriate rendering
        $timeout($scope.start);
        // switch appropriate variables to true now that they've been shown
        $localStorage.tour.game_ttl_done = true;
        $localStorage.tour.game_box_done = true;
      } 
      // If the game_title has already been shown, only show the game_box
      else if (angular.isDefined($localStorage.tour) && ($localStorage.tour.game_ttl_done == true) && ($localStorage.tour.game_box_done == false) ) {
        // tour steps
        var tour = window.tour = {
          config: {
              //dark: true,
          },
          steps: [
          {
              target: '.game_box',
              content: "This one is a fun quiz."
          }]
        };

        // initiate appropriate tour once page is loaded to ensure appropriate rendering
        $timeout($scope.start);
        // switch appropriate variables to true now that they've been shown
        $localStorage.tour.game_box_done = true;
      }

  });


    app.controller('gameCTourCtrl', function ($localStorage, $scope, $q, nzTour, $timeout, $interpolate) {

      // functions
      $scope.start = function() {
        nzTour.start(tour);
      };

            // If the game_title has not been shown yet, show it followed by the game_box
      if (angular.isDefined($localStorage.tour) && ($localStorage.tour.game_ttl_done == false) ){
        // tour steps
        var tour = window.tour = {
          config: {
            disableInteraction: true,
            mask: {
              scrollThrough: false // Allows the user to scroll the scrollbox or window through the mask
            },
              //dark: true,
          },
          steps: [{
              target: '.game_3_link',
              content: "Starred sections have games.",
              before: function(direction){
                var d = $q.defer();
                // fix button spacing
                $("nz-tour #nzTour-actions").css("bottom", "7.5em");
                // fix mask 
                setTimeout(function(){ 
                  window.scrollBy(0,1);
                  console.log("init mask fix");
                }, 100);


                d.resolve(); // or d.reject()
                return d.promise
              },
          },
          {
              target: '.game_box',
              content: "This one is a fun quiz.",
              before: function(direction){
                var d = $q.defer();
                // Do some more cool stuff
                window.scrollBy(0,1);
                console.log("init mask fix")
                d.resolve(); // or d.reject()
                return d.promise
              }
          }]
        };
        // initiate appropriate tour once page is loaded to ensure appropriate rendering
        $timeout($scope.start);
        // switch appropriate variables to true now that they've been shown
        $localStorage.tour.game_ttl_done = true;
        $localStorage.tour.game_box_done = true;
      } 
      // If the game_title has already been shown, only show the game_box
      else if (angular.isDefined($localStorage.tour) && ($localStorage.tour.game_ttl_done == true) && ($localStorage.tour.game_box_done == false) ) {
        // tour steps
        var tour = window.tour = {
          config: {
              //dark: true,
          },
          steps: [
          {
              target: '.game_box',
              content: "This one is a fun quiz."
          }]
        };

        // initiate appropriate tour once page is loaded to ensure appropriate rendering
        $timeout($scope.start);
        // switch appropriate variables to true now that they've been shown
        $localStorage.tour.game_box_done = true;
      }

  });


app.controller('gameDTourCtrl', function ($localStorage, $scope, $q, nzTour, $timeout, $interpolate) {

      // functions
      $scope.start = function() {
        nzTour.start(tour);
      };

            // If the game_title has not been shown yet, show it followed by the game_box
      if (angular.isDefined($localStorage.tour) && ($localStorage.tour.game_ttl_done == false) ){
        // tour steps
        var tour = window.tour = {
          config: {
            disableInteraction: true,
            mask: {
              scrollThrough: false // Allows the user to scroll the scrollbox or window through the mask
            },
              //dark: true,
          },
          steps: [{
              target: 'game_4_link',
              content: "Starred sections have games.",
              before: function(direction){
                var d = $q.defer();
                // fix button spacing
                $("nz-tour #nzTour-actions").css("bottom", "7.5em");
                // fix mask 
                setTimeout(function(){ 
                  window.scrollBy(0,1);
                  console.log("init mask fix");
                }, 100);


                d.resolve(); // or d.reject()
                return d.promise
              },
          },
          {
              target: '.game_box',
              content: "This one is a fun quiz.",
              before: function(direction){
                var d = $q.defer();
                // Do some more cool stuff
                window.scrollBy(0,1);
                console.log("init mask fix")
                d.resolve(); // or d.reject()
                return d.promise
              }
          }]
        };
        // initiate appropriate tour once page is loaded to ensure appropriate rendering
        $timeout($scope.start);
        // switch appropriate variables to true now that they've been shown
        $localStorage.tour.game_ttl_done = true;
        $localStorage.tour.game_box_done = true;
      } 
      // If the game_title has already been shown, only show the game_box
      else if (angular.isDefined($localStorage.tour) && ($localStorage.tour.game_ttl_done == true) && ($localStorage.tour.game_box_done == false) ) {
        // tour steps
        var tour = window.tour = {
          config: {
              //dark: true,
          },
          steps: [
          {
              target: '.game_box',
              content: "This one is a fun quiz."
          }]
        };

        // initiate appropriate tour once page is loaded to ensure appropriate rendering
        $timeout($scope.start);
        // switch appropriate variables to true now that they've been shown
        $localStorage.tour.game_box_done = true;
      }

  });

app.controller('gameETourCtrl', function ($localStorage, $scope, $q, nzTour, $timeout, $interpolate) {

      // functions
      $scope.start = function() {
        nzTour.start(tour);
      };

            // If the game_title has not been shown yet, show it followed by the game_box
      if (angular.isDefined($localStorage.tour) && ($localStorage.tour.game_ttl_done == false) ){
        // tour steps
        var tour = window.tour = {
          config: {
            disableInteraction: true,
            mask: {
              scrollThrough: false // Allows the user to scroll the scrollbox or window through the mask
            },
              //dark: true,
          },
          steps: [{
              target: '.game_5_link',
              content: "Starred sections have games.",
              before: function(direction){
                var d = $q.defer();
                // fix button spacing
                $("nz-tour #nzTour-actions").css("bottom", "7.5em");
                // fix mask 
                setTimeout(function(){ 
                  window.scrollBy(0,1);
                  console.log("init mask fix");
                }, 100);


                d.resolve(); // or d.reject()
                return d.promise
              },
          },
          {
              target: '.game_box',
              content: "This one is a fun quiz.",
              before: function(direction){
                var d = $q.defer();
                // Do some more cool stuff
                window.scrollBy(0,1);
                console.log("init mask fix")
                d.resolve(); // or d.reject()
                return d.promise
              }
          }]
        };
        // initiate appropriate tour once page is loaded to ensure appropriate rendering
        $timeout($scope.start);
        // switch appropriate variables to true now that they've been shown
        $localStorage.tour.game_ttl_done = true;
        $localStorage.tour.game_box_done = true;
      } 
      // If the game_title has already been shown, only show the game_box
      else if (angular.isDefined($localStorage.tour) && ($localStorage.tour.game_ttl_done == true) && ($localStorage.tour.game_box_done == false) ) {
        // tour steps
        var tour = window.tour = {
          config: {
              //dark: true,
          },
          steps: [
          {
              target: '.game_box',
              content: "This one is a fun quiz."
          }]
        };

        // initiate appropriate tour once page is loaded to ensure appropriate rendering
        $timeout($scope.start);
        // switch appropriate variables to true now that they've been shown
        $localStorage.tour.game_box_done = true;
      }

  });




