import angular from 'angular';
import uirouter from 'angular-ui-router';

import './styles/list.css'

import routes from './config/routes';
import ListController from './controllers/list';
import Auth from '../auth/auth';
import tableService from './services/table-actions';
import firebase from '../../config/firebase';
import edit from './directives/edit';
import filter from './directives/filter';

export default angular.module('list', [uirouter])
    .config(routes)
    .factory('firebase', firebase)
    .service('tableService', tableService)
    .service('Auth', Auth)
    .directive('edit', edit)
    .directive('filter', filter)
    .controller('ListController', ListController)
    .name;