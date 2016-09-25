var app = angular.module('website', ['ngRoute'])
    .config(function ($routeProvider){
        $routeProvider
            .when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'HomeController'})
            .when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'AboutController'})
            .when('/catalogs', {
                templateUrl: 'partials/catalogs.html',
                controller: 'CatalogsController'})
            .when('/books', {
                templateUrl: 'partials/books.html',
                controller: 'BooksController'})
            .when('/articles', {
                templateUrl: 'partials/articles.html',
                controller: 'ArticlesController'})
            .when('/reviews', {
                templateUrl: 'partials/reviews.html',
                controller: 'ReviewsController'})
            .when('/writeup', {
                templateUrl: 'partials/writeup.html',
                controller: 'WriteupController'})
            .otherwise({redirectTo:'/home'});
    })
    .controller('MainController', function($scope, $route) {
        $scope.$route = $route;
    })
    .controller('HomeController', function($scope) {
        $scope.title = 'עמוד הבית';
    })
    .controller('AboutController', function($scope) {
        $scope.title = 'אודות';
    })
    .controller('CatalogsController', function($scope) {
        $scope.title = 'פרסומים > קטלוגים';
    })
    .controller('ArticlesController', function($scope) {
        $scope.title = 'פרסומים > מאמרים';
    })
    .controller('BooksController', function($scope) {
        $scope.title = 'פרסומים > ספרים';
    })
    .controller('ReviewsController', function($scope) {
        $scope.title = 'פרסומים > בקורות בעתון';
    })
    .controller('WriteupController', function($scope) {
        $scope.title = 'כתבו עליי';
    })
    .controller('SectionController', function($scope, $http) {
        $http.get('data/sections.json').
            success(function(data, status, headers, config) {
                $scope.sections = data;

            }).
            error(function(data, status, headers, config) {
                // log error
            });
    })
    .controller('CatalogsController', function($scope) {
        $http.get('data/catalogs.json').
            success(function(data, status, headers, config) {
                $scope.catalogs = data;

            }).
            error(function(data, status, headers, config) {
                // log error
            });
    });

