var actors = angular.module('actors', []);
actors.controller("gallery", gallery);
function gallery($scope) {
	$scope.actors = [{
		name : 'Millie Bobby Brown',
		link : 'http://www.imdb.com/name/nm5611121/',
		img : 'img/Millie Bobby Brown.jpg',
	}, {
		name : 'Margot Robbie',
		link : 'http://www.imdb.com/name/nm3053338/',
		img : 'img/Margot Robbie.jpg',
	}, {
		name : 'Winona Ryder',
		link : 'http://www.imdb.com/name/nm0000213/',
		img : 'img/Winona Ryder.jpg',
	}, {
		name : 'Amy Adams',
		link : 'http://www.imdb.com/name/nm0010736/',
		img : 'img/Amy Adams.jpg',
	}, {
		name : 'Pamela Anderson',
		link : 'http://www.imdb.com/name/nm0000097/?ref_=nv_sr_1',
		img : 'img/Pamela Anderson.jpg',
	}, {
		name : 'Emma Watson',
		link : 'http://www.imdb.com/name/nm0914612/',
		img : 'img/Emma Watson.jpg',
	}, {
		name : 'Jack Huston',
		link : 'http://www.imdb.com/name/nm1658935/',
		img : 'img/Jack Huston.jpg',
	}, {
		name : 'Jason Statham',
		link : 'http://www.imdb.com/name/nm0005458/',
		img : 'img/Jason Statham.jpg',
	}, {
		name : 'Leonardo DiCaprio',
		link : 'http://www.imdb.com/name/nm0000138/',
		img : 'img/Leonardo DiCaprio.jpg',
	}, {
		name : 'Jonah Hill',
		link : 'http://www.imdb.com/name/nm1706767/',
		img : 'img/Jonah Hill.jpg',
	}, {
		name : 'Scarlett Johansson',
		link : 'http://www.imdb.com/name/nm0424060/',
		img : 'img/Scarlett Johansson.jpg',
	}, {
		name : 'Cameron Diaz',
		link : 'http://www.imdb.com/name/nm0000139/',
		img : 'img/Cameron Diaz.jpg'
	}, {
		name : 'Denzel washington',
		link : 'http://www.imdb.com/name/nm0000243/?ref_=fn_al_nm_1',
		img : 'img/denzel washington.jpg'
	}, {
		name : 'Elden Henson',
		link : 'http://www.imdb.com/name/nm0711805/?ref_=fn_al_nm_1',
		img : 'img/Elden Henson.jpg'
	}, {
		name : 'Johanna Braddy',
		link : 'http://www.imdb.com/name/nm1715189/?ref_=fn_al_nm_1',
		img : 'img/Johanna Braddy.jpg'
	}, {
		name : 'Michael Chiklis',
		link : 'http://www.imdb.com/name/nm0004821/?ref_=fn_al_nm_1',
		img : 'img/Michael Chiklis.jpg'
	}, {
		name : 'Peggy Lipton',
		link : 'http://www.imdb.com/name/nm0005152/?ref_=fn_al_nm_1',
		img : 'img/Peggy Lipton.jpg'
	}, {
		name : 'Timothy Bottoms',
		link : 'http://www.imdb.com/name/nm0000961/?ref_=fn_al_nm_1',
		img : 'img/Timothy Bottoms.jpg'
	}, {
		name : 'Angelina Jolie Pitt',
		link : 'http://www.imdb.com/name/nm0001401/?ref_=nv_sr_2',
		img : 'img/Angelina Jolie Pitt.jpg'
	}, {
		name : 'Will Smith',
		link : 'http://www.imdb.com/name/nm0000226/?ref_=nv_sr_1',
		img : 'img/Will Smith.jpg'
	}, {
		name : 'Nicolas Cage',
		link : 'http://www.imdb.com/name/nm0000115/?ref_=nv_sr_2',
		img : 'img/Nicolas Cage.jpg'
	}, {
		name : 'Brad Pitt',
		link : 'http://www.imdb.com/name/nm0000093/',
		img : 'img/Brad Pitt.jpg'
	},{
		name:'Hugh Jackman',
		link:'http://www.imdb.com/name/nm0413168/?ref_=nv_sr_1',
		img: 'img/Hugh Jackman.jpg',
	},{
		name:'Michael Fassbender',
		link:'http://www.imdb.com/name/nm1055413/?ref_=nv_sr_1',
		img:'img/Michael Fassbender.jpg',
	},{
		name:'Tom Hanks',
		link:'http://www.imdb.com/name/nm0000158/?ref_=nv_sr_3',
		img:'img/Tom Hanks.jpg',
	},
	];
	$scope.sort = function(dir){
		if (dir == 'up') {
			$scope.upDown = 'name';
		} else {
			$scope.upDown = '-name';
		};
	};
};

