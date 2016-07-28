var articleControllers = angular.module('articleControllers', []);

articleControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {

	$http({
	  url: "http://wrapup.news/api/v1/get_article",
	  method: "POST",
	  headers: {
		"Content-Type": "application/x-www-form-urlencoded"
	  },
	  transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
      },
	  data: {
		"max_article_update_seq_no": "17258",
		"time_zone": "utc"
	  }
	}).then(function successCallback(response) {
		// this callback will be called asynchronously
		// when the response is available
		$scope.articles = response.data.article;

	  }, function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	  });
}]);



articleControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.artists.length-1;
    }

    if ($routeParams.itemId < $scope.artists.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

