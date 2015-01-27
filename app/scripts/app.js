define([
	'jquery',
	'underscore',
	'backbone',
	'views/commenting/CommentView'
], function($, _, Backbone, CommentView) {
  var App = Backbone.View.extend({
    initialize: function() {
      console.log( 'Wahoo!' );
      var commentView = new CommentView();
    }
  });

  return App;
});