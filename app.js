(function (){
    'use strict'; //this will hint us for global variables

    angular.module('myapp', [])
        .controller("mycontroller", function($scope){
            $scope.name="";
            $scope.totalValue = 0;
            console.log("cont");

            $scope.calculateValue = function(){
                console.log("calc1");
                var stringValue = calculateTotalValue($scope.name);
                $scope.totalValue = stringValue;
                console.log(stringValue);
            };

            function calculateTotalValue(string){
                console.log("calc");
                var stringCalculatedValue = 0;
                for(var i=0; i < string.length; i++){
                    stringCalculatedValue += string.charCodeAt(i);
                    // console.log(stringValue);
                }
                return stringCalculatedValue;
            }

        });

})();