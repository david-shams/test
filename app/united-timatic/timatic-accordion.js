/**
 * Created by david1 on 5/5/16.
 */
angular.module('ui.bootstrap', ['ngAnimate', 'ui.bootstrap'])
    .controller('AccordionDemoCtrl', function ($scope) {
        $scope.oneAtATime = true;

        $scope.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];

        $scope.items = ['<label for="visaRequired"></label>'+
            '<input type="checkbox" id="visaRequired" value="visa">',
            '<label for="Other"></label>'+
            '<input type="checkbox" id="Other" value="other">',
            '<label for="warningHealth"></label>'+
            '<input type="checkbox" id="warningHealth" value="helth">'];

        $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    });