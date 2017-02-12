import angular from 'angular';
import uirouter from 'angular-ui-router';

import './styles/form.css'

import routes from './config/routes';
import SignUpController from './controllers/signup';
import Auth from '../auth/auth';
import firebase from '../../config/firebase';
import validator from './directives/validator';

export default angular.module('signup', [uirouter])
    .config(routes)
    .factory('firebase', firebase)
    .service('Auth', Auth)
    .directive('validator', validator)
    .controller('SignUpController', SignUpController)
    .name;