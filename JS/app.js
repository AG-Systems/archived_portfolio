var app = angular.module('demo', ['ngFlowGrid']);

app.controller('appCtrl',['$scope','fgDelegate',function($scope,fgDelegate){
	$scope.items = [
		{
			id:1,
			img:'http://placehold.it/400x500/D25064/fff',
			name:'If You Want Something, You Must Go Get It',
			link:'https://youtu.be/qd4SRACGdrg',
		},
		{
			id:2,
			img:'http://placehold.it/400x500/D25064/fff',
			name:'Lorem ipsum dolor sit amet',
			link:'https://www.google.com/',
		},
		{
			id:3,
			img:'http://placehold.it/400x500/D25064/fff',
			name:'Lorem ipsum dolor sit amet',
			link:'https://www.google.com/',
		},
		{
			id:4,
			img:'http://placehold.it/400x500/D25064/fff',
			name:'Lorem ipsum dolor sit amet',
			link:'https://www.google.com/',
		},
		{
			id:5,
			img:'http://placehold.it/400x500/D25064/fff',
			name:'Lorem ipsum dolor sit amet',
			link:'https://www.google.com/',
		},
		{
			id:6,
			img:'http://placehold.it/400x500/D25064/fff',
			name:'Lorem ipsum dolor sit amet',
			link:'https://www.google.com/',
		},
		{
			id:7,
			img:'http://placehold.it/400x500/D25064/fff',
			name:'Lorem ipsum dolor sit amet',
			link:'https://www.google.com/',
		},
		{
			id:8,
			img:'http://placehold.it/400x500/D25064/fff',
			name:'Lorem ipsum dolor sit amet',
			link:'https://www.google.com/',
		},
		{
			id:9,
			img:'http://placehold.it/400x500/D25064/fff',
			name:'Lorem ipsum dolor sit amet',
			link:'https://www.google.com/',
		},
		{
			id:10,
			img:'http://placehold.it/400x500/D25064/fff',
			name:'Lorem ipsum dolor sit amet',
			link:'https://www.google.com/',
		},
		{
			id:11,
			img:'http://placehold.it/400x500/D25064/fff',
			name:'Lorem ipsum dolor sit amet',
			link:'https://www.google.com/',
		},

	]
    // then you can:
    // homePageGrid.minItemWidth = 150;
    // homePageGrid.refill();

}]);
