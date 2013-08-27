var tutorialApp= angular.module('tutorialApp' , []);
tutorialApp.config(function($routeProvider){
$routeProvider.when('/',
{
 controller:'TutorialController',
 templateUrl:'home.html'
}
).
when('/hello',
{
 controller:'TutorialController',
 templateUrl:'hello.html'
 }
)
.when('/todo',
{
 controller:'TutorialController',
 templateUrl:'todo.html'
 }
)
.when('/filter',
{
 controller:'TutorialController',
 templateUrl:'filter.html'
 }
)
.when('/game',
{
 controller:'TutorialController',
 templateUrl:'game.html'
 }
)
.otherwise({redirectTo:'/'});
});
tutorialApp.factory('TutorialController',function(){
 var customers=[
    {name:"Awanish" ,city:"mgs"},
	{name:"Prayag",city:"pune"},
	{name:"Ankur",city:"delhi"},
	{name:"Test",city:"bombay"}
  ];
  var factory={};
  factory.getCustomer=function(){
  return customers;
  };
  return factory;
});
tutorialApp.controller('TutorialController',function($scope,TutorialController){

$scope.tog=1;


$scope.customers=TutorialController.getCustomer();
$scope.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  
  };
  
  /*for game*/
  
  $scope.YourChoice="";
  $scope.CompChoice="";
  $scope.result="";
 
  $scope.RPSCLicked=function(option){
   var compChoice=Math.floor((Math.random()*3)+1);
   $scope.YourChoice=GetOptionName(option);
   $scope.CompChoice=GetOptionName(compChoice);
   if( option==compChoice)
   {
	  $scope.result="Tie";
   }
   else
   {
     if(option==1 && compChoice==2)
	 {
	   $scope.result="You Loose";
	 }
	 if(option==1 && compChoice==3)
	 {
	   $scope.result="You Win";
	 }
	 
	 if(option==2 && compChoice==1)
	 {
	   $scope.result="You Won";
	 }
	 if(option==2 && compChoice==3)
	 {
	   $scope.result="You Loose";
	 }
	 
	 if(option==3 && compChoice==1)
	 {
	   $scope.result="You Loose";
	 }
	 if(option==3 && compChoice==2)
	 {
	   $scope.result="You Won";
	 }
	 
   }
    
  };
});
function GetOptionName(option){
 if(option==1)
 {
   return "Rock";
 }
 if(option==2){
   return "Paper";
 }
 if(option==3)
 {
   return "Scissor";
 }

}
