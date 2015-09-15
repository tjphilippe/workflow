// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.newItem = "";
  $scope.priority='';
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.priorities.splice(index, 1);
  }

  $scope.priorities=["High","Low"];
  $scope.prioritizeItem= function(){
    console.log("in prioritize");
    if($scope.priority ==="1"){
      $scope.priorities.push($scope.priority);
      $scope.priority = "";
     // $scope.priorities[index]="High";
    }
    else if($scope.priority==="2"){
      //$scope.priorities[index]="Med";
         $scope.priorities.push($scope.priority);
      $scope.priority = "";
    } else {
      //$scope.priorities[index]="Low";
      $scope.priorities.push("3");
      $scope.priority = "";
    }
    $scope.priorities.toString();
  }
    

  
});


/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 * 
 * *********************/