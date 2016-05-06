/**
 * Created by david1 on 4/28/16.
 */
angular.module('ual.component', ['ngAnimate', 'ui.bootstrap'])
    .controller('AccordionDemoCtrl', function ($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
        {
            title: 'Timatic Warnig 1',
            content: 'Timatic Warning 1'
        },
        {
            title: 'Timatic Warning 2',
            content: [
                {visa: "Required"},
                {from: "Canada"},
                {to: "India"},
                {airportTax: "25$"}
            ]
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