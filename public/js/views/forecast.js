define([
  'backbone',
  'templates'
], function(Backbone, Templates) {
  'use strict';
  var ForecastView = Backbone.View.extend({
    tagName: 'li',
    className: 'hide',
    template: Templates.forecast,
    
    initialize: function() {
      this.listenTo(this.model, 'destroy', this.remove);
      this.listenTo(this.model, 'change:isActive', this.changeDisplay);
      this.render();
    },
    
    changeDisplay: function() {
      if (this.model.get('isActive')) {
        this.$el.removeClass('hide');  
      } else {
        this.$el.addClass('hide');  
      }
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
  
  return ForecastView;
});