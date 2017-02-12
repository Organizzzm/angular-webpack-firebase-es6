export default ($parse) => {
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    return {
        restrict: "A",
        link: (scope, element, attr) => {
            const fn = $parse(attr.filter, null, true),
                  callback = () => { fn(scope, {$event: event}) },
                  filter = debounce(()=> { scope.$evalAsync(callback) }, 500);

            element.on('keyup', ()=> {
                filter();
            })
        }
    }
};