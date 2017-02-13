export default ($parse) => {
    "ngInject";

    return {
        restrict: "A",
        link: (scope, element, attr) => {
            element.attr('contenteditable', true);

            const fn = $parse(attr.edit, null, true),
                model = $parse(attr.ngModel),
                modelSetter = model.assign;

            element.on('blur', (event)=> {
                var callback = function () {
                    fn(scope, {$event: event});
                };

                modelSetter(scope, element.text());
                scope.$evalAsync(callback);
            })
        }
    }
};