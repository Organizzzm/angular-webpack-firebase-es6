export default ($http) => {
    "ngInject";

    return {
        require: 'ngModel',
        link: function (scope, ele, attrs, c) {
            scope.$watch(attrs.ngModel, function () {
                console.log('sdgdsg');
            });
        }
    }
}