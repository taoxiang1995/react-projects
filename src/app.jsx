var React = require('react');
var ThumbnailList = require('./thumbnail-list');


var options = {
		thumbnailData : [
		{
			title : "Learn it",
			number : 108,
			imageURL : 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
			header: 'lear React.js',
			description: 'React is a JavaScript library for creating user interfaces by Facebook and Instagram. Many people choose to think of React as the V in MVC. We built React to solve one problem: building large applications with data that changes over time.'
		},
		{
			title : "Learn it",
			number : 38,
			imageURL : 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400',
			header: 'lear Gulp.js',
			description: 'Gulp is a fast and intuitive streaming build tool built on Node.js. Check out their website and docs to get started. If you re familiar with Grunt, it s similar, but has some advantages. Here s some of the sweet stuff you try out with this repo.'


		}]
	};

	

	var element = React.createElement(ThumbnailList, options);
	//When we tell react to render this class, we need to 
	//tell it where to put the rendered dom
	ReactDOM.render(element, document.querySelector('.target'));