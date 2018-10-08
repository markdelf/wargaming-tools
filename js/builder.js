var armyCompApp = angular.module('armyCompApp', []);

armyCompApp.controller('ArmyCtrl', function ($scope, $http) {
  $http.get('data/warscrolls.json').then(
        function(res){
            $scope.warscrolls = res.data;
        }
    );
  $scope.army = [];
});