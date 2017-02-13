import template from '../view/signup.html';

export default ($stateProvider) => {
    "ngInject";

    $stateProvider
        .state('signup', {
            url: '/signup',
            template: template,
            controller: 'SignUpController',
            controllerAs: 'signup'
        })
}