(function() {
    'use strict';

    angular
        .module('jasmine_testing', ['ngMock'])
        .controller('TestingController', TestingController);

    TestingController.$inject = [];

    function TestingController() {
		console.log("Hello");

		var vm = this;

    	vm.z = 0;
		vm.sum = function() {
			vm.z = vm.x + vm.y;
		};


    };

})();

