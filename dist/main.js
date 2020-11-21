
var mainApp = angular.module("mainApp", ['ngRoute','ngStorage']);

mainApp.config(function($routeProvider) {  
    $routeProvider
		.when('/home1', {
			templateUrl: 'home1.html',
            controller: 'HomeController'          
		})
		.when('/viewMovies', {
			templateUrl: 'movies.html',
			controller: 'MoviesController'
        })
        .when('/viewSeries', {
			templateUrl: 'series.html',
			controller: 'SeriesController'
		})
		.otherwise({
			redirectTo: '/home1'
		});
});

mainApp.controller('HomeController', function($scope, $localStorage, $http) {
    try {
        $scope.error= false;
        var settings = {
            "url": "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json",
            "method": "GET",
            "timeout": 0,
       };
        $http(settings).then(function(response) {
            $scope.data = response.data;
            $localStorage.data= JSON.stringify($scope.data);
            console.log($scope.data)
        });
    //verilen url'den çekilen data homepagete local storage e kaydediliyor, kullanıcı homepage e her geldiğinde güncel data
    //çekilecek fakat series ve movies pagelerinde tekrar tekrar request atılmaması ve performansı çalışması için local storege deki 
    //veri üzerinden çalışılacak


      }
      catch(err) {
        $scope.error= true;
      }
    

	
});

mainApp.controller('MoviesController', function($scope, $localStorage, $http,$filter) {///harfe göre sıralı 21 kayıt
    
    try {
        $scope.error= false;
        $scope.data = JSON.parse($localStorage.data);
    
    $scope.movies = $scope.data.entries.filter(entry =>entry.releaseYear >=2010 && entry.programType =='movie');//programType-movie/releaseYear >=2010
    $scope.movies =$filter('orderBy')($scope.movies,'+title', false);//film ismine göre artan sıralama
    $scope.movies=$filter('limitTo')($scope.movies, 21, 0);
    //$scope.movies = $scope.movies.map(({ Poster Art }) => ({ Poster Art: PosterArt }));
    console.log($scope.movies);
    console.log($scope.movies[0].images['Poster Art'].url);	
    $scope.count = 0;
    $scope.loading=true;
      }
      catch(err) {
        $scope.error= true;
      }

    
});




mainApp.controller('SeriesController', function($scope, $localStorage, $http,$filter) {
    
    try {
        $scope.error= false;
            
    $scope.data = JSON.parse($localStorage.data); 
    $scope.series = $scope.data.entries.filter(entry =>entry.releaseYear >=2010 && entry.programType =='series');//programType-movie/releaseYear >=2010
    $scope.series =$filter('orderBy')($scope.series,'+title', false);//film ismine göre artan sıralama
    $scope.series=$filter('limitTo')($scope.series, 21, 0);
    $scope.count = 0;
    $scope.loading=false;
    console.log($scope.series);
    

      }
      catch(err) {
        $scope.error= true;
      }

});

mainApp.directive('imageonload', function() {// imageler yüklenirken bir loading eventı tetiklemek için//loadingi kapatıp açmayı başaramadım
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() { 
                console.log(element);              
                // if(scope.$parent.count !=22)
                // {
                //     scope.$parent.count = scope.$parent.count+1;
                //     scope.loading=true;
                //     console.log(scope.$parent.count);
                // }
                //  if(scope.$parent.count == 21){
                //     scope.loading=false;
                //     console.log("leel");
                //     console.log(scope.$parent);
                // }
            });
        }
    };
});
