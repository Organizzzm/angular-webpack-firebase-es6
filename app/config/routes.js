export default ($urlRouterProvider, $locationProvider) => {
    "ngInject";

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.otherwise('/signup');
}