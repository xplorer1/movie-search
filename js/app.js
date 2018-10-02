angular.module('MainModule', [
        'ControllersModule',
        'ui.router'
    ])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'index.html',
                controller: 'ServiceWorkerController'
            })
            .state('landingPage', {
                url: '/landingPage',
                templateUrl: 'templates/landingPage.html',
                controller: 'LandingPageController'
            })
            .state('searchResults', {
                url: '/searchResults',
                templateUrl: 'templates/searchResults.html',
                controller: 'SearchResultsPageController'
            })
    }]);