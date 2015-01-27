define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var bzAPIUrl = 'http://www.buzzfeed.com/api/v1/comments/3494459';
  
  var CommentingModel = Backbone.Model.extend({
  	urlRoot:bzAPIUrl,
    defaults: {
      display_name: "John Doe",
      added: 27,
      blurb: "worker",
      love_count: 1,
      hate_count: 1
      }
  });

  var commentItem = new CommentingModel();
  commentItem.fetch();
  console.log(commentItem);

  return CommentingModel;

});