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
	$scope.experience = [
		{
			id:1,
			img:'css/images/angular.png',
			name:'Angularjs',
			link:'https://github.com/AG-Systems?tab=repositories',
		},
		{
			id:2,
			img:'css/images/rails.png',
			name:'Ruby on rails',
			link:'https://github.com/AG-Systems?tab=repositories',
		},
		{
			id:3,
			img:'css/images/basicfrontend.png',
			name:'HTML / CSS / JS',
			link:'https://github.com/AG-Systems?tab=repositories',
		},
		{
			id:4,
			img:'css/images/bootstrap.png',
			name:'Bootstrap',
			link:'https://github.com/AG-Systems?tab=repositories',
		},
		{
			id:5,
			img:'css/images/jquery.png',
			name:'jQuery',
			link:'https://github.com/AG-Systems?tab=repositories',
		},
		{
			id:6,
			img:'css/images/cpp.png',
			name:'C++',
			link:'https://github.com/AG-Systems?tab=repositories',
		},
		{
			id:7,
			img:'css/images/ae.png',
			name:'After Effects',
			link:'https://github.com/AG-Systems?tab=repositories',
		},
		{
			id:8,
			img:'css/images/vegas.png',
			name:'Sony Vegas',
			link:'https://github.com/AG-Systems?tab=repositories',
		},
	]
	$scope.careers = [
		{
			id:1,
			img:'css/images/vgmarket.png',
			name:'VGMarket',
			desc: 'Performed quality control and inspection on all aspects of game design',
			date: 'January 2014 – Present',
			location: 'San Francisco Bay Area',
			link:'http://www.vgmarket.com/',
		},
	]
	$scope.products = [
		{
			id:1,
			img:'css/images/physics.png',
			name:'VGMarket',
			desc: 'hello',
		},
	]
}]);

$("#click").click(function()
{
		alert("Your book is overdue.");
});
