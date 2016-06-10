var app = angular.module('about', ['ngFlowGrid']);

app.controller('appCtrl',['$scope','fgDelegate',function($scope,fgDelegate){
	$scope.items = [
		{
			id:1,
			img:'css/images/angular.png',
			name:'Angularjs',
			link:'',
		},
		{
			id:2,
			img:'css/images/rails.png',
			name:'Ruby on rails',
			link:'',
		},
    {
      id:3,
      img:'css/images/basicfrontend.png',
      name:'HTML / CSS / JS',
      link:'',
    },
    {
      id:4,
      img:'css/images/bootstrap.png',
      name:'Bootstrap',
      link:'',
    },
    {
      id:5,
      img:'css/images/jquery.png',
      name:'jQuery',
      link:'',
    },
    {
      id:6,
      img:'css/images/cpp.png',
      name:'C++',
      link:'',
    },
    {
      id:7,
      img:'css/images/ae.png',
      name:'After Effects',
      link:'',
    },
    {
      id:8,
      img:'css/images/vegas.png',
      name:'Sony Vegas',
      link:'',
    },

	]

}]);
