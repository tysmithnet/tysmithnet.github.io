(function () {
    angular
        .module("app")
        .config(function ($stateProvider, $urlServiceProvider) {
            $urlServiceProvider.rules.otherwise({
                state: 'home'
            });

            $stateProvider.state('home', {
                url: '/home',
                component: 'tsHome'
            });
        });
})();