define([
  'backbone',
  'templates',
  'moment'
], function(Backbone, Templates, moment) {
  'use strict';
  var ForecastView = Backbone.View.extend({
    tagName: 'li',
    className: 'hide forecast',
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
      this.model.set('dt', moment(this.model.get('dt_txt')).calendar().replace('at', '<br>at'));
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });
  
  return ForecastView;
});