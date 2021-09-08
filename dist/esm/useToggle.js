export var useToggle = function (state) {
    var res = state;
    var toggle = function () {
        res = !state;
    };
    return [res, toggle];
};
