angular.module('app')
  .directive('uiClick_history', ['$animate', function ($animate) {
    return {
        link: function(scope, element, attributes){
            element.addClass('MyClass');
        }
    };
  }]);