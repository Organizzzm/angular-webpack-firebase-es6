import template from '../view/list.html';
import resolver from '../../auth/resolver';

export default ($stateProvider) => {
    $stateProvider
        .state('list', {
            url: '/',
            template: template,
            controller: 'ListController',
            controllerAs: 'list',
            resolve: resolver
        })
}