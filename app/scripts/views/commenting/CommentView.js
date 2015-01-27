define([
	'jquery',
	'underscore',
	'backbone',
	'models/commenting/CommentingModel'
], function($, _, Backbone, CommentingModel){
	
	var CommentView = Backbone.View.extend({
		el:$("#page"),
		initialize:function(){
			var that = this;

			var onDataHandler = function(collection){
				that.render();
			}
			this.model = new CommentingModel();
			this.model.fetch({success: onDataHandler});
		},
		render: function(){

			var data = {
				test: this.model.toJSON(),
				_: _
			};
			console.log(data);
			//var compiledTemplate = _.template(commentingTemplate, data);
			//this.$el.html(compiledTemplate);
		}
	});
	return CommentView;
});