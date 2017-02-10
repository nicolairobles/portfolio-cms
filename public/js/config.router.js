'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams', '$modalStack',
      function ($rootScope,   $state,   $stateParams, $modalStack) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams; 
          $rootScope.$on('$stateChangeStart', function() {
            var top = $modalStack.getTop();
            if (top) {
              $modalStack.dismiss(top.key);
            }
          });       
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 'MODULE_CONFIG', '$locationProvider', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG, MODULE_CONFIG, $locationProvider) {

          $urlRouterProvider.otherwise('/');
          
          $stateProvider
              .state('homepage', {
                  url: '/',
                  templateUrl: 'tpl/homepage',
                  data: {
                    css: [
                      '../css/homepage.css'
                    ]
                  }
              })

              // testing
              // .state('header', {
              //     url: '/tpl/module-1/blocks/header',
              //     templateUrl: 'tpl/module-1/blocks/header',
              //     data: {
              //       css: [
              //         '../css/module-1.css'
              //       ]
              //     }
              // })

          // MODULE 1: MEDIA OVERVIEW
              .state('media-overview', {
                  abstract: true,
                  url: '/media-overview',
                  templateUrl: "tpl/module-1/app",
                  data: {
                    css: [
                      '../css/module-1.css'
                    ]
                  }
              })
              // SECTION 1
                // media-is.html page url config
                // .state('media-overview.media-is', {
                //   url: '/media-is',
                //   templateUrl: 'tpl/module-1/section-1/media-is/media-is.html'
                // })

                // testing media-is
                .state('media-overview.media-is', {
                  url: '/media-is',
                  templateUrl: 'tpl/module-1/section-1/media-is/media-is'
                })

                // video-text-audio.html page url config
                .state('media-overview.video-text-audio', {
                  url: '/video-text-audio',
                  templateUrl: 'tpl/module-1/section-1/video-text-audio/video-text-audio.html'
                })

                // is-this-media.html page url config
                .state('media-overview.is-this-media', {
                  url: '/is-this-media',
                  templateUrl: 'tpl/module-1/section-1/is-this-media/is-this-media.html'
                })

                // content_and_ads.html page url config
                .state('media-overview.content-and-ads', {
                  url: '/content-and-ads',
                  templateUrl: 'tpl/module-1/section-1/content-and-ads/content-and-ads.html'
                })

                // ad-models.html page url config
                .state('media-overview.ad-models', {
                  url: '/ad-models',
                  templateUrl: 'tpl/module-1/section-1/ad-models/ad-models.html'
                })

                // linear-vs-dynamic.html page url config
                .state('media-overview.linear-vs-dynamic', {
                  url: '/linear-vs-dynamic',
                  templateUrl: 'tpl/module-1/section-1/linear-vs-dynamic/linear-vs-dynamic.html'
                })

                // platforms.html page url config
                .state('media-overview.platforms', {
                  url: '/platforms',
                  templateUrl: 'tpl/module-1/section-1/platforms/platforms.html'
                })

                // platforms-and-key-players.html page url config
                .state('media-overview.platforms-and-key-players', {
                  url: '/platforms-and-key-players',
                  templateUrl: 'tpl/module-1/section-1/platforms-and-key-players/platforms-and-key-players.html'
                })

                // key-players.html page url config
                .state('media-overview.key-players', {
                  url: '/key-players',
                  templateUrl: 'tpl/module-1/section-1/key-players/key-players.html'
                })

                // what-have-we-learned.html page url config
                .state('media-overview.what-have-we-learned', {
                  url: '/what-have-we-learned',
                  templateUrl: 'tpl/module-1/section-1/what-have-we-learned/what-have-we-learned.html'
                })

              // Section 2
                // where_does_nielsen_come_in.html page url config
                .state('media-overview.where-does-nielsen-come-in', {
                  url: '/where-does-nielsen-come-in',
                  templateUrl: 'tpl/module-1/section-2/where-does-nielsen-come-in/where-does-nielsen-come-in.html'
                })

                // what-are-ratings.html page url config
                .state('media-overview.what-are-ratings', {
                  url: '/what-are-ratings',
                  templateUrl: 'tpl/module-1/section-2/what-are-ratings/what-are-ratings.html'
                })

                // ratings-reports.html page url config
                .state('media-overview.ratings-reports', {
                  url: '/ratings-reports',
                  templateUrl: 'tpl/module-1/section-2/ratings-reports/ratings-reports.html'
                })

                // primary-playback-periods.html page url config
                .state('media-overview.primary-playback-periods', {
                  url: '/primary-playback-periods',
                  templateUrl: 'tpl/module-1/section-2/primary-playback-periods/primary-playback-periods.html'
                })

                // ratings-game.html page url config
                .state('media-overview.ratings-game', {
                  url: '/ratings-game',
                  templateUrl: 'tpl/module-1/section-2/ratings-game/ratings-game.html'
                  })


                // how-do-we-get-ratings.html page url config
                .state('media-overview.how-do-we-get-ratings', {
                  url: '/how-do-we-get-ratings',
                  templateUrl: 'tpl/module-1/section-2/how-do-we-get-ratings/how-do-we-get-ratings.html'
                })

                // panels.html page url config
                .state('media-overview.panels', {
                  url: '/panels',
                  templateUrl: 'tpl/module-1/section-2/panels/panels.html'
                })

                  // recent additions 12/6/16

                    // tv-panels-overview.html page url config
                    .state('media-overview.tv-panels-overview', {
                      url: '/tv-panels-overview',
                      templateUrl: 'tpl/module-1/section-2/tv-panels-overview/tv-panels-overview.html'
                    })

                    // tv-panels-methods.html page url config
                    .state('media-overview.tv-panels-methods', {
                      url: '/tv-panels-methods',
                      templateUrl: 'tpl/module-1/section-2/tv-panels-methods/tv-panels-methods.html'
                    })

                    // tv-panels-panels.html page url config
                    .state('media-overview.tv-panels-panels', {
                      url: '/tv-panels-panels',
                      templateUrl: 'tpl/module-1/section-2/tv-panels-panels/tv-panels-panels.html'
                    })


                    // digital-panels-overview.html page url config
                    .state('media-overview.digital-panels-overview', {
                      url: '/digital-panels-overview',
                      templateUrl: 'tpl/module-1/section-2/digital-panels-overview/digital-panels-overview.html'
                    })

                    // digital-panels-methods.html page url config
                    .state('media-overview.digital-panels-methods', {
                      url: '/digital-panels-methods',
                      templateUrl: 'tpl/module-1/section-2/digital-panels-methods/digital-panels-methods.html'
                    })

                    // digital-panels-panels.html page url config
                    .state('media-overview.digital-panels-panels', {
                      url: '/digital-panels-panels',
                      templateUrl: 'tpl/module-1/section-2/digital-panels-panels/digital-panels-panels.html'
                    })


                    // audio-panels-overview.html page url config
                    .state('media-overview.audio-panels-overview', {
                      url: '/audio-panels-overview',
                      templateUrl: 'tpl/module-1/section-2/audio-panels-overview/audio-panels-overview.html'
                    })

                    // audio-panels-methods.html page url config
                    .state('media-overview.audio-panels-methods', {
                      url: '/audio-panels-methods',
                      templateUrl: 'tpl/module-1/section-2/audio-panels-methods/audio-panels-methods.html'
                    })

                    // audio-panels-panels.html page url config
                    .state('media-overview.audio-panels-panels', {
                      url: '/audio-panels-panels',
                      templateUrl: 'tpl/module-1/section-2/audio-panels-panels/audio-panels-panels.html'
                    })


                // tv-panels.html page url config
                .state('media-overview.tv-panels', {
                  url: '/tv-panels',
                  templateUrl: 'tpl/module-1/section-2/tv-panels/tv-panels.html'
                })

                // audio-panels.html page url config
                .state('media-overview.audio-panels', {
                  url: '/audio-panels',
                  templateUrl: 'tpl/module-1/section-2/audio-panels/audio-panels.html'
                })

                // mobile-panels.html page url config
                .state('media-overview.mobile-panels', {
                  url: '/mobile-panels',
                  templateUrl: 'tpl/module-1/section-2/mobile-panels/mobile-panels.html'
                  })

                // panels-game.html page url config
                .state('media-overview.panels-game', {
                  url: '/panels-game',
                  templateUrl: 'tpl/module-1/section-2/panels-game/panels-game.html'
                })

                // census-data.html page url config
                .state('media-overview.census-data', {
                  url: '/census-data',
                  templateUrl: 'tpl/module-1/section-2/census-data/census-data.html'
                })

                // privacy.html page url config
                .state('media-overview.privacy', {
                  url: '/privacy',
                  templateUrl: 'tpl/module-1/section-2/privacy/privacy.html'
                  })

        // MODULE 2: TV OVERVIEW
              .state('tv-overview', {
                  abstract: true,
                  url: '/tv-overview',
                  templateUrl: "tpl/module-2/layout.html",
                  data: {
                    css: [
                      '../css/module-2.css'
                    ]
                  }
              })
              // SECTION 1
                // media-is.html page url config
                .state('tv-overview.media-is', {
                  url: '/media-is',
                  templateUrl: 'tpl/module-2/section-1/media-is/media-is.html'
                })

                // video-text-audio.html page url config
                .state('tv-overview.video-text-audio', {
                  url: '/video-text-audio',
                  templateUrl: 'tpl/module-2/section-1/video-text-audio/video-text-audio.html'
                })

                // is-this-media.html page url config
                .state('tv-overview.is-this-media', {
                  url: '/is-this-media',
                  templateUrl: 'tpl/module-2/section-1/is-this-media/is-this-media.html'
                })

                // content_and_ads.html page url config
                .state('tv-overview.content-and-ads', {
                  url: '/content-and-ads',
                  templateUrl: 'tpl/module-2/section-1/content-and-ads/content-and-ads.html'
                })

                // ad-models.html page url config
                .state('tv-overview.ad-models', {
                  url: '/ad-models',
                  templateUrl: 'tpl/module-2/section-1/ad-models/ad-models.html'
                })

                // linear-vs-dynamic.html page url config
                .state('tv-overview.linear-vs-dynamic', {
                  url: '/linear-vs-dynamic',
                  templateUrl: 'tpl/module-2/section-1/linear-vs-dynamic/linear-vs-dynamic.html'
                })

                // platforms.html page url config
                .state('tv-overview.platforms', {
                  url: '/platforms',
                  templateUrl: 'tpl/module-2/section-1/platforms/platforms.html'
                })

                // platforms-and-key-players.html page url config
                .state('tv-overview.platforms-and-key-players', {
                  url: '/platforms-and-key-players',
                  templateUrl: 'tpl/module-2/section-1/platforms-and-key-players/platforms-and-key-players.html'
                })

                // key-players.html page url config
                .state('tv-overview.key-players', {
                  url: '/key-players',
                  templateUrl: 'tpl/module-2/section-1/key-players/key-players.html'
                })

                // what-have-we-learned.html page url config
                .state('tv-overview.what-have-we-learned', {
                  url: '/what-have-we-learned',
                  templateUrl: 'tpl/module-2/section-1/what-have-we-learned/what-have-we-learned.html'
                })

              // Section 2
                // where_does_nielsen_come_in.html page url config
                .state('tv-overview.where-does-nielsen-come-in', {
                  url: '/where-does-nielsen-come-in',
                  templateUrl: 'tpl/module-2/section-2/where-does-nielsen-come-in/where-does-nielsen-come-in.html'
                })

                // what-are-ratings.html page url config
                .state('tv-overview.what-are-ratings', {
                  url: '/what-are-ratings',
                  templateUrl: 'tpl/module-2/section-2/what-are-ratings/what-are-ratings.html'
                })

                // ratings-reports.html page url config
                .state('tv-overview.ratings-reports', {
                  url: '/ratings-reports',
                  templateUrl: 'tpl/module-2/section-2/ratings-reports/ratings-reports.html'
                })

                // primary-playback-periods.html page url config
                .state('tv-overview.primary-playback-periods', {
                  url: '/primary-playback-periods',
                  templateUrl: 'tpl/module-2/section-2/primary-playback-periods/primary-playback-periods.html'
                })

                // ratings-game.html page url config
                .state('tv-overview.ratings-game', {
                  url: '/ratings-game',
                  templateUrl: 'tpl/module-2/section-2/ratings-game/ratings-game.html'
                  })


                // how-do-we-get-ratings.html page url config
                .state('tv-overview.how-do-we-get-ratings', {
                  url: '/how-do-we-get-ratings',
                  templateUrl: 'tpl/module-2/section-2/how-do-we-get-ratings/how-do-we-get-ratings.html'
                })

                // panels.html page url config
                .state('tv-overview.panels', {
                  url: '/panels',
                  templateUrl: 'tpl/module-2/section-2/panels/panels.html'
                })

                // tv-panels.html page url config
                .state('tv-overview.tv-panels', {
                  url: '/tv-panels',
                  templateUrl: 'tpl/module-2/section-2/tv-panels/tv-panels.html'
                })

                // audio-panels.html page url config
                .state('tv-overview.audio-panels', {
                  url: '/audio-panels',
                  templateUrl: 'tpl/module-2/section-2/audio-panels/audio-panels.html'
                })

                // mobile-panels.html page url config
                .state('tv-overview.mobile-panels', {
                  url: '/mobile-panels',
                  templateUrl: 'tpl/module-2/section-2/mobile-panels/mobile-panels.html'
                  })

                // panels-game.html page url config
                .state('tv-overview.panels-game', {
                  url: '/panels-game',
                  templateUrl: 'tpl/module-2/section-2/panels-game/panels-game.html'
                })

                // census-data.html page url config
                .state('tv-overview.census-data', {
                  url: '/census-data',
                  templateUrl: 'tpl/module-2/section-2/census-data/census-data.html'
                })

                // privacy.html page url config
                .state('tv-overview.privacy', {
                  url: '/privacy',
                  templateUrl: 'tpl/module-2/section-2/privacy/privacy.html'
                  })

          // MODULE 1: TLDRs
              // media-is TLDR modal
                .state('media-overview.media-is.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-1/media-is/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })

                // video-text-audio TLDR modal
                .state('media-overview.video-text-audio.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-1/video-text-audio/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })

                // is-this-media TLDR modal
                .state('media-overview.is-this-media.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-1/is-this-media/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })

                // content-and-ads TLDR modal
                .state('media-overview.content-and-ads.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-1/content-and-ads/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })


                // ad-models TLDR modal
                .state('media-overview.ad-models.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-1/ad-models/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })

                // linear-vs-dynamic TLDR modal
                .state('media-overview.linear-vs-dynamic.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-1/linear-vs-dynamic/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })

                // platforms TLDR modal
                .state('media-overview.platforms.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-1/platforms/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })


                // platforms-and-key-players TLDR modal
                .state('media-overview.platforms-and-key-players.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-1/platforms-and-key-players/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })
                
                

                // key-players TLDR modal
                .state('media-overview.key-players.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-1/key-players/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })

                // what-have-we-learned TLDR modal
                .state('media-overview.what-have-we-learned.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-1/what-have-we-learned/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })


                // where-does-nielsen-come-in TLDR modal
                .state('media-overview.where-does-nielsen-come-in.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-2/where-does-nielsen-come-in/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })


                // what-are-ratings TLDR modal
                .state('media-overview.what-are-ratings.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-2/what-are-ratings/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })

                // ratings-reports TLDR modal
                .state('media-overview.ratings-reports.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-2/ratings-reports/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })


                // primary-playback-periods TLDR modal
                .state('media-overview.primary-playback-periods.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-2/primary-playback-periods/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })

                // ratings-game TLDR modal
                .state('media-overview.ratings-game.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-2/ratings-game/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })

                // how-do-we-get-ratings TLDR modal
                .state('media-overview.how-do-we-get-ratings.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-2/how-do-we-get-ratings/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })

                // panels TLDR modal
                .state('media-overview.panels.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-2/panels/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })
                // tv-panels TLDR modal
                .state('media-overview.tv-panels.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-2/tv-panels/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })
                // audio-panels TLDR modal
                .state('media-overview.audio-panels.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-2/audio-panels/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })
                // mobile-panels TLDR modal
                .state('media-overview.mobile-panels.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-2/mobile-panels/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })
                // panels-game TLDR modal
                .state('media-overview.panels-game.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-2/panels-game/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })
                // census-data TLDR modal
                .state('media-overview.census-data.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-2/census-data/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })
                // privacy TLDR modal
                .state('media-overview.privacy.tldr', {
                  url: '/tldr',
                  onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
                        $modal.open({
                            templateUrl: "tpl/module-1/section-2/privacy/tldr.html",
                            resolve: {
                              item: function() { return; }
                            },
                            size: 'lg',
                            controller: ['$scope', 'item', function($scope, item) {
                              $scope.dismiss = function() {
                                $scope.$dismiss();
                              };

                              $scope.save = function() {
                                item.update().then(function() {
                                  $scope.$close(true);
                                });
                              };
                            }]
                        }).result.finally(function() {
                            $state.go('^');
                        });
                    }]
                })


                ;

          function load(srcs, callback) {
            return {
                deps: ['$ocLazyLoad', '$q',
                  function( $ocLazyLoad, $q ){
                    var deferred = $q.defer();
                    var promise  = false;
                    srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                    if(!promise){
                      promise = deferred.promise;
                    }
                    angular.forEach(srcs, function(src) {
                      promise = promise.then( function(){
                        if(JQ_CONFIG[src]){
                          return $ocLazyLoad.load(JQ_CONFIG[src]);
                        }
                        angular.forEach(MODULE_CONFIG, function(module) {
                          if( module.name == src){
                            name = module.name;
                          }else{
                            name = src;
                          }
                        });
                        return $ocLazyLoad.load(name);
                      } );
                    });
                    deferred.resolve();
                    return callback ? promise.then(function(){ return callback(); }) : promise;
                }]
            }
          }

          if(window.history && window.history.pushState) {
              $locationProvider.html5Mode({
                  enabled : true,
                  requireBase : false
              }).hashPrefix('');
          }


      }
    ]
  );
