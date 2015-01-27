require.config({
  paths: {
    'jquery': 		'vendor/jquery/dist/jquery',
    'underscore': 	'vendor/underscore-amd/underscore',
    'backbone': 	'vendor/backbone-amd/backbone',
    'css': 			'../css/main.css'
  }
});

require([
	'app'
], 
function(AppView) {
  new AppView;
});