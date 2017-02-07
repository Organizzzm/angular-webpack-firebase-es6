import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './config/routes';
import ListController from './controllers/list';
import Auth from '../auth/auth';

export default angular.module('list', [uirouter])
    .config(routes)
    .service('Auth', Auth)
    .controller('ListController', ListController)
    .name;