System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function FormateDate(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    exports_1("FormateDate", FormateDate);
    return {
        setters: [],
        execute: function () {
        }
    };
});
