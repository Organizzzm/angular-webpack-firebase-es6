import angular from 'angular';
import uirouter from 'angular-ui-router';

import './styles/main.css';

import routing from './config';
import signup from './modules/signup'
import list from './modules/list'

const app = angular
    .module('app', [
        uirouter,
        signup,
        list
    ])
    .config(routing)
    .run([
        '$rootScope',
        '$location',
        ($root, $location) => {
            $root.$on('$stateChangeStart', (e, newUrl, oldUrl) => {
                if (newUrl !== oldUrl) {
                    $root.loadingView = true;
                }
            });
            $root.$on('$stateChangeSuccess', () => {
                $root.loadingView = false;
            });
            $root.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, rejection) => {
                if (rejection === 'not authorized') {
                    event.preventDefault();
                    $location.path('/signup');
                } else {
                    $root.loadingView = false;
                }
            });
        }]);
