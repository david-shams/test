/**
 * Created by david1 on 5/5/16.
 */
angular.module('ual', ['ual.component'])
    .run(function ($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (data) {
            console.log('$routeChangeSuccess');
        })
    })
    .controller('MainCtrl', function ($scope) {
        $scope.company = {
            name: 'United Airways',
            address: '225 Wacker street',
            city: 'Chicago'
        }
    });