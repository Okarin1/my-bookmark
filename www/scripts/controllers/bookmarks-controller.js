app.controller('bookmarksCtr', ['$scope', '$state', '$stateParams', '$filter', '$window', '$timeout', '$document', 'ngDialog', 'bookmarkService', 'pubSubService', 'dataService', function ($scope, $state, $stateParams, $filter, $window, $timeout, $document, ngDialog, bookmarkService, pubSubService, dataService) {
  console.log("Hello bookmarksCtr...", $stateParams);
  if (dataService.smallDevice()) {
    $window.location = "http://m.mybookmark.cn/#/tags";
    return;
  }
}]);
