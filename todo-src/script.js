// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.newItem = "";
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.priorities.push("Low");
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
  $scope.prioritizeItem= function(item, priority){
    console.log("in prioritize");
    var index = $scope.todos.indexOf(item);
    if(priority ==="1"){
      $scope.priorities[index]="High";
    }
    else if(priority==="2"){
      $scope.priorities[index]="Med";
    } else {
      $scope.priorities[index]="Low";
    }
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