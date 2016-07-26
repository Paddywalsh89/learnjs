// 'use strict';
// var learnjs = {};
// learnjs.showView = function(hash){
// 	var problemView = $('<div class="problem-view">').text('Coming soon!');
// $('.view-container').empty().append(problemView);	
// }


'use strict';
var learnjs={};
learnjs.problemView = function(problemNumber) {
	var view = $('.templates .problem-view').clone();
	view.find('.title').text('Problem #' + problemNumber);
	return view;
}

learnjs.showView=function(hash){
	var routes = {
		'#problem': learnjs.problemView
	};
	var hashParts = hash.split('-');
	var viewFn = routes[hashParts[0]];
	if (viewFn) {
		 $('.view-container').empty().append(viewFn(hashParts[1])); //does this mean that that value of hash has been appended to 42. 
	}
}

learnjs.appOnReady = function(){
	window.onhashchange = function(){
		learnjs.showView(window.location.hash);
	};
	learnjs.showView(window.location.hash);
}
//I don't really understand this

