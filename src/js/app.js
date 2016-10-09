var app = angular.module("testHerokuNodeApp", ["ngRoute"]);
app.config(["$routeProvider", "$locationProvider",function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when("/users", {
        templateUrl: "./users.html",
        controller: "testHerokuNodeApp.usersController"
    })
    .when("/computers", {
        templateUrl: "./comps.html"
    })
    .otherwise({
        templateUrl: "./main.html",
    controller: "testHerokuNodeApp.nameController"
    })
}]);
app.controller('testHerokuNodeApp.nameController', [ "$scope", function($scope) {
    $scope.name = "Some Username";
    }]);
app.controller('testHerokuNodeApp.usersController', [ "$scope", "$http", function($scope, $http) {
        $scope.getUsersList = function(){
            $http.get("/api/users").then(function(response) {
                $scope.usersList = response.data;
            });
        };
	$scope.getUsersList();
        
	$scope.currentUser = {
	    firstname : "Type Name",
	    lastname : "Type Lastname",
	    birthdate : "Type Birthdate"
	}

	$scope.addUser = function(){
	    console.log("adduser function start");
	    var config = {
	        headers : {'Content-Type': 'application/json'}
	    };
/*	    var data = {
	        firstname: "Oleg",
                lastname: "Gazmanov",
		birthdate : "1940-08-17"
	    }*/
	    $http.post('/api/users', $scope.currentUser, config)
	    .success(function (data, status, headers, config){console.log(data);})
	    .error(function (data, status, header, config) {console.log(data);});

	    $scope.getUsersList();
	}
    }]);
