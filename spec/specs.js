describe('calculator', function() {

    beforeEach(angular.mock.module('jasmine_testing'));

    var $controller, scope;

    beforeEach(angular.mock.inject(function(_$controller_, $rootScope) {
        $controller = _$controller_;
        scope = $rootScope.$new();
    }));

    describe('sum', function() {
        it('1 + 1 should equal 2', function() {

            var vm = $controller('TestingController', {
                $scope: scope
            });

            vm.x = 1;
            vm.y = 2;
            vm.sum();
            expect(vm.z).toBe(3);
        });
    });

});
