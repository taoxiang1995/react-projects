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
var Badge = React.createClass({displayName: "Badge",
		render: function(){
			return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
					  this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
					)
		}
	});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
		render: function(){
			var list = this.props.thumbnailData.map(function(thumbnailProps){
				return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
			}) 

			return React.createElement("div", null, 
				list
			)
		}
	});
var Thumbnail = React.createClass({displayName: "Thumbnail",
		render: function(){
			return React.createElement("div", {className: "thumbnail"}, 
		      React.createElement("img", {src: this.props.imageURL}), 
		      React.createElement("div", {className: "caption"}, 
		        React.createElement("h3", null, this.props.header), 
		        React.createElement("p", null, this.props.description), 
		        React.createElement("p", null, 
			        React.createElement(Badge, {title: this.props.title, number: this.props.number})
		        )
		      )
		    )
		}
	});