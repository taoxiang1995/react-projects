
//first, we need to include three files:
//gulp, gulp-react and gulp-concat

var gulp = require ('gulp');
var gutil = require ('gulp-util'); //print debuging
var source = require ('vinyl-source-stream');//
var browserify = require('browserify');//figure what part of code depends on another
var watchify = require('watchify');//tool rerun gulp again if the souce changes.
var reactify = require('reactify'); //converting jsx to js


gulp.task('default', function(){
	var bundler = watchify(browserify({
		entries:['./src/app.jsx'], //the starting file, usually the bootstrap file
		transform: [reactify],//compile to js file
		extensions: ['.jsx'],//go visit all the file ended with .jsx
		debug: true, 
		cache: {},
		packageCache: {},
		fullPaths: true
	}));

	function build(file)  //create a build funtion to excute
	{
		if(file) 
			gutil.log('Recompiling '+file);

		return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source('main.js')) //the output file
			.pipe(gulp.dest('./')); //store it in the working directory
	};

	build();
	bundler.on('update', build);
});


