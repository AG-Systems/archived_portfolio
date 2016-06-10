var app = angular.module('demo', ['ngFlowGrid']);

app.controller('appCtrl',['$scope','fgDelegate',function($scope,fgDelegate){
	$scope.items = [
		{
			id:1,
			img:'video/want.png',
			name:'If You Want Something, You Must Go Get It',
			link:'https://www.youtube.com/watch?v=qd4SRACGdrg',
		},
		{
			id:2,
			img:'http://placehold.it/400x500/D25064/fff',
			name:'Test',
			link:'https://www.google.com/',
		},

	]

}]);
