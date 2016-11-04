var app = angular.module('website', ['ngRoute'])
    .config(function ($routeProvider){
        $routeProvider
            .when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'HomeController'})
            .when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'AboutController'})
            .when('/publications', {
                templateUrl: 'partials/publications.html',
                controller: 'PublicationsController'})
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
            .when('/contact', {
                templateUrl: 'partials/contact.html',
                controller: 'ContactController'})
            .otherwise({redirectTo:'/home'});
    })
    .controller('MainController', function($scope, $route) {
        $scope.$route = $route;
    })
    .controller('HomeController', function($scope, $http) {
        $scope.title = 'עמוד הבית';
    })
    .controller('AboutController', function($scope) {
        $scope.title = 'אודות';
    })
    .controller('PublicationsController', function($scope, $http) {
        $scope.title = 'פרסומים';
        $http.get('data/publications.json').success(function(data, status, headers, config) {
            $scope.publications = data;

        }).
            error(function(data, status, headers, config) {
                // log error
                console.log($http);
            });
    })
    .controller('CatalogsController', function($scope, $http) {
        $scope.title = 'פרסומים > קטלוגים';
        $http.get('data/catalogs.json').success(function(data, status, headers, config) {
            $scope.catalogs = data;

        }).
            error(function(data, status, headers, config) {
                // log error
                console.log($http);
            });
    })
    .controller('ArticlesController', function($scope, $http) {
        $scope.title = 'פרסומים > מאמרים';
    })
    .controller('BooksController', function($scope, $http) {
        $scope.title = 'פרסומים > ספרים';
        $http.get('data/books.json').success(function(data, status, headers, config) {
            $scope.books = data;

        }).
            error(function(data, status, headers, config) {
                // log error
            });
    })
    .controller('ReviewsController', function($scope, $http) {
        $scope.title = 'פרסומים > בקורות בעתון';
        $http.get('data/reviews.json').success(function(data, status, headers, config) {
            $scope.reviews = data;

        }).
            error(function(data, status, headers, config) {
                // log error
            });
    })
    .controller('WriteupController', function($scope, $http) {
        $scope.title = 'כתבו עליי';
    })
    .controller('ContactController', function($scope) {
        $scope.title = 'צור קשר';
    })
    .controller('SectionController', function($scope, $http) {
        $http.get('data/sections.json').
            success(function(data, status, headers, config) {
                $scope.sections = data;

            }).
            error(function(data, status, headers, config) {
                // log error
            });
    });
