function statesController($root, $state) {
    $root.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, rejection) => {
        if (rejection === 'not authorized') {
            $state.go('signup');
        }
    });
}

statesController.$inject = ['$rootScope', '$state'];
export default statesController;