import template from '../view/list.html';

export default ($stateProvider) => {
    $stateProvider
        .state('list', {
            url: '/',
            template: template,
            controller: 'ListController',
            controllerAs: 'list',
            resolve: {
                auth: ($q, firebase) => {
                    let deferred = $q.defer();

                    firebase
                        .auth()
                        .onAuthStateChanged((user) => {
                            if (user) deferred.resolve();
                            else deferred.reject('not authorized');
                        });

                    return deferred.promise;
                }
            }
        })
}