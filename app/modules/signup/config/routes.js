import template from '../view/signup.html';

export default ($stateProvider) => {
    $stateProvider
        .state('signup', {
            url: '/signup',
            template: template,
            controller: 'SignUpController',
            controllerAs: 'signup'
        })
}