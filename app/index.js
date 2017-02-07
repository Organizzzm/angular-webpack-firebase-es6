import angular from 'angular';
import uirouter from 'angular-ui-router';

import './styles/main.css';

import routing from './config/routes';
import signup from './modules/signup'
import list from './modules/list'
import statesController from './config/states';

const app = angular
    .module('app', [
        uirouter,
        signup,
        list
    ])
    .config(routing)
    .run(statesController);
