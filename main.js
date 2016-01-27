(function() {
    'use strict';

    angular
        .module('jasmine_testing', ['ngMock'])
        .controller('TestingController', TestingController);

    TestingController.$inject = ['$filter'];

    function TestingController($filter) {

        var vm = this;

        vm.z = 0;

        var colors = [{
            color: "red",
            value: "#f00"
        }, {
            color: "green",
            value: "#0f0"
        }, {
            color: "blue",
            value: "#00f"
        }, {
            color: "cyan",
            value: "#0ff"
        }, {
            color: "magenta",
            value: "#f0f"
        }, {
            color: "yellow",
            value: "#ff0"
        }, {
            color: "black",
            value: "#000"
        }];

        vm.sum = function() {
            vm.z = vm.x + vm.y;
        };

        vm.search = function(color) {
            vm.color = $filter('filter')(colors, {
                color: color
            })[0].value;

        };


    };

})();
